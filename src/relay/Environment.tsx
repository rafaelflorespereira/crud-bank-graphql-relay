import { commitLocalUpdate } from 'relay-runtime'
import { RelayEnvironment } from 'src/RelayEnvironment'

commitLocalUpdate(RelayEnvironment, (store) => {
  const account = store.create('account:1', 'Account')
  if (!account) {
    throw new Error('Failed to create account')
  }
  const user = store.create('user:1', 'User')
  if (!user) {
    throw new Error('Failed to create user')
  }

  const root = store.getRoot()
  if (!root) {
    throw new Error('Failed to get root')
  }
  root.setLinkedRecord(account, 'account')
})
