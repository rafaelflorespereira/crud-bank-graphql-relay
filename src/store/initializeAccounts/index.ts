import { commitLocalUpdate, IEnvironment, RecordSourceSelectorProxy } from 'relay-runtime'
import { Account, User } from 'src/interfaces'

const createUser = (store: RecordSourceSelectorProxy, user: User, id: number) => {
  const userId = `client:User:${id++}`
  const userNode = store.create(userId, 'User')
  userNode.setValue(userId, 'id')
  userNode.setValue(user.name, 'name')
  userNode.setValue(user.email, 'email')
  return userNode
}

const createAccount = (store: RecordSourceSelectorProxy, account: Account, id: number) => {
  const accountId = `client:Account:${id++}`
  const accountNode = store.create(accountId, 'Account')
  accountNode.setValue(accountId, 'id')
  accountNode.setValue(account.accountNumber, 'accountNumber')
  accountNode.setValue(account.currentBalance, 'currentBalance')
  return accountNode
}

export function initializeAccounts(
  environment: IEnvironment,
  { users: usersTemp, accounts: accountsTemp }: { users: User[]; accounts: Account[] },
) {
  commitLocalUpdate(environment, (store) => {
    if (usersTemp.length === 0 || accountsTemp.length === 0) return
    const totalLength = Math.min(usersTemp.length, accountsTemp.length)

    for (let i = 0; i < totalLength; i++) {
      const root = store.getRoot()
      const users = root.getLinkedRecords('users') || []
      const accounts = root.getLinkedRecords('accounts') || []

      const user = createUser(store, usersTemp[i], i)
      root.setLinkedRecords([...users, user], 'users')

      const accountNode = createAccount(store, accountsTemp[i], i)
      accountNode.setLinkedRecord(user, 'user')
      root.setLinkedRecords([...accounts, accountNode], 'accounts')
    }
  })
}
