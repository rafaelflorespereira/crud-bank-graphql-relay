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

export function UserInfoDashboard({ user }: { user: userInfoDashboardFragment$key | undefined | null }) {
  const data = useFragment(userFragment, user)
  console.log({ data })
  return (
    <section className="my-8">
      <h3 className="mb-4 text-2xl font-semibold text-white">Hello {data?.name}</h3>
    </section>
  )
}
