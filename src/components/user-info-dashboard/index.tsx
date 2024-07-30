import { useClientQuery } from 'react-relay'
import { graphql } from 'relay-runtime'
import { dashboardUserQuery } from 'src/pages/dashboard/__generated__/dashboardUserQuery.graphql'

const userQuery = graphql`
  query dashboardUserQuery($userId: ID!) {
    user(id: $userId) {
      id
      name
      email
    }
  }
`
type UserInfoDashboardProps = {
  userId: string
}
export function UserInfoDashboard({ userId }: UserInfoDashboardProps) {
  const {
    user: { name },
  } = useClientQuery<dashboardUserQuery>(userQuery, { userId })
  return (
    <section className="my-8">
      <h2 className="mb-4 text-2xl font-semibold text-white">Hello {name}</h2>
    </section>
  )
}
