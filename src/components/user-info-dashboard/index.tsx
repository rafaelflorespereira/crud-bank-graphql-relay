import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { userInfoDashboardFragment$key } from './__generated__/userInfoDashboardFragment.graphql'

const userFragment = graphql`
  fragment userInfoDashboardFragment on User {
    id
    name
    email
  }
`
type UserInfoDashboardProps = {
  user: userInfoDashboardFragment$key
}
export function UserInfoDashboard({ user }: UserInfoDashboardProps) {
  const { name } = useFragment(userFragment, user)
  return (
    <section className="my-8">
      <h2 className="mb-4 text-2xl font-semibold text-white">Hello {name}</h2>
    </section>
  )
}
