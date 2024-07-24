import { commitLocalUpdate, IEnvironment } from 'relay-runtime'
import { Account, User } from 'src/interfaces'

let tempUserID = 0

export function initializeAccounts(
  environment: IEnvironment,
  { users, accounts }: { users: User[]; accounts: Account[] },
) {
  commitLocalUpdate(environment, (store) => {
    if (users.length === 0 || accounts.length === 0) return

    const root = store.getRoot()
    const tempUsers = []
    const __typename = 'User'
    for (const iterator of users) {
      const { name, email } = iterator
      const userId = `client:${__typename}:${tempUserID++}`
      const user = store.create(userId, __typename)

      user.setValue(name, 'name')
      user.setValue(email, 'email')
      tempUsers.push(user)
    }
    root.setLinkedRecords(tempUsers, 'users')
  })
}
