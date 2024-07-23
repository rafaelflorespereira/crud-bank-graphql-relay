import { commitLocalUpdate, IEnvironment } from 'relay-runtime'

export function initializeAccounts(environment: IEnvironment, accounts: any[]) {
  commitLocalUpdate(environment, (store) => {
    const user = store.create('user:1', 'User')
    if (!user) {
      console.error('Failed to create user record')
      return
    }

    const account = store.create('account:1', 'Account')
    if (!account) {
      console.error('Failed to create account record')
      return
    }
    account.setLinkedRecord(user, 'user')

    const root = store.getRoot()
    if (!root) {
      console.error('Failed to get root')
      return
    }

    root.setLinkedRecord(account, 'account')
    console.log('Local update committed:', root.getLinkedRecord('account'))
  })
}
