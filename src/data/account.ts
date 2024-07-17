import { Account, Transaction, User } from 'src/interfaces'
import { v4 as uuidv4 } from 'uuid'

// Helper functions to generate random data
const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min

const getRandomAmount = () => parseFloat((Math.random() * 1000).toFixed(2))

const getRandomDate = () => new Date(Date.now() - getRandomInt(0, 10000000000)).toISOString()

const getRandomType = () => (Math.random() > 0.5 ? 'credit' : 'debit')

const getRandomName = () => {
  const names = ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown']
  return names[Math.floor(Math.random() * names.length)]
}

const getRandomEmail = () => {
  const domains = ['example.com', 'test.com', 'demo.com']
  const name = getRandomName().toLowerCase().replace(' ', '.')
  const domain = domains[Math.floor(Math.random() * domains.length)]
  return `${name}@${domain}`
}

const generateUser = (): User => ({
  name: getRandomName(),
  email: getRandomEmail(),
})

const generateTransaction = (from: Account, to: Account): Transaction => ({
  id: uuidv4(),
  amount: getRandomAmount(),
  description: 'Sample transaction',
  date: getRandomDate(),
  type: getRandomType(),
  from,
  to,
})
const orderTransactionsByDate = (transactions: Transaction[]) => {
  return transactions.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime()
  })
}

const generateAccount = (user: User): Account => {
  const transactions: Transaction[] = []
  const account: Account = {
    user,
    accountNumber: uuidv4(),
    currentBalance: getRandomAmount(),
    transactions,
    debits: { amount: 0, total: 0, transactions: [] },
    credits: { amount: 0, total: 0, transactions: [] },
    numberOfTransactions: 0,
    numberOfDebits: 0,
    numberOfCredits: 0,
  }

  for (let i = 0; i < getRandomInt(5, 15); i++) {
    const transaction = generateTransaction(account, account) // Simplification: from and to are the same account
    transactions.push(transaction)
    if (transaction.type === 'credit') {
      account.credits.amount += transaction.amount
      account.credits.total++
      account.credits.transactions.push(transaction)
    } else {
      account.debits.amount += transaction.amount
      account.debits.total++
      account.debits.transactions.push(transaction)
    }
  }
  account.credits.transactions = orderTransactionsByDate(account.credits.transactions)
  account.debits.transactions = orderTransactionsByDate(account.debits.transactions)
  account.transactions = orderTransactionsByDate(transactions)

  account.numberOfTransactions = transactions.length

  return account
}

// Generate mock data
const generateMockData = () => {
  const users = Array.from({ length: 3 }, generateUser)
  const accounts = users.map(generateAccount)

  return { users, accounts }
}

export const mockData = generateMockData()
