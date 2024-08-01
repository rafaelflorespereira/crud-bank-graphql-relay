import { commitLocalUpdate, IEnvironment, RecordProxy, RecordSourceSelectorProxy } from 'relay-runtime'

let tempId = 0
const createTransaction = (
  store: RecordSourceSelectorProxy,
  fromAccount: RecordProxy,
  toAccount: RecordProxy,
  amount: number,
  type: string,
) => {
  const transactionId = `client:Transaction:${tempId++}`
  const transaction = store.create(transactionId, 'Transaction')
  transaction.setValue(amount, 'amount')
  transaction.setValue(new Date().toISOString(), 'date')
  transaction.setValue(type, 'type')
  transaction.setLinkedRecord(fromAccount, 'from')
  transaction.setLinkedRecord(toAccount, 'to')

  return transaction
}

const updateFinancialRecord = (account: RecordProxy, transaction: RecordProxy, amount: number, type: string) => {
  const financialRecords = account.getLinkedRecord(type)
  const transactions = financialRecords?.getLinkedRecords('transactions') || []
  const newAmount = (financialRecords?.getValue('amount') as number) + 1
  const total = (financialRecords?.getValue('total') as number) + amount

  financialRecords?.setValue(newAmount, 'amount')
  financialRecords?.setValue(total, 'total')
  financialRecords?.setLinkedRecords([...transactions, transaction], 'transactions')
  console.log('created financialRecords', { financialRecords })
}

export function commitTransactionCreateLocally(
  environment: IEnvironment,
  { fromId, toId, amount }: { fromId: string; toId: string; amount: number },
) {
  commitLocalUpdate(environment, (store) => {
    const debitAccount = store.get(fromId)
    const creditAccount = store.get(toId)

    if (!debitAccount || !creditAccount) {
      throw new Error('Account not found')
    }

    const debitAccountBalance = debitAccount.getValue('currentBalance') as number
    const creditAccountBalance = creditAccount.getValue('currentBalance') as number

    if (debitAccountBalance === undefined) {
      throw new Error('Account balance is undefined')
    }

    if (debitAccountBalance < amount) {
      throw new Error('Insufficient funds')
    }

    const debitTransaction = createTransaction(store, debitAccount, creditAccount, amount, 'DEBIT')
    updateFinancialRecord(debitAccount, debitTransaction, amount, 'debits')

    const creditTransaction = createTransaction(store, creditAccount, debitAccount, amount, 'CREDIT')
    updateFinancialRecord(creditAccount, creditTransaction, amount, 'credits')

    const newDebitAccountBalance = debitAccountBalance - amount
    debitAccount.setValue(newDebitAccountBalance, 'currentBalance')

    const newCreditAccountBalance = creditAccountBalance + amount
    creditAccount.setValue(newCreditAccountBalance, 'currentBalance')

    return debitTransaction
  })
}
