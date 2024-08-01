import { useClientQuery, useLazyLoadQuery } from 'react-relay'
import { DashboardCard } from 'src/components/dashboard-card'
import { TransactionBarChart } from 'src/components/transaction-bar-chart'
import { TransactionList } from 'src/components/transaction-list'
import { Button } from 'src/components/ui/button'
import { mockData } from 'src/data/account'
import { dashboardAccountsQuery } from './__generated__/dashboardAccountsQuery.graphql'
import { graphql } from 'relay-runtime'
import { dashboardAccountQuery } from './__generated__/dashboardAccountQuery.graphql'
import { dashboardUsersQuery } from './__generated__/dashboardUsersQuery.graphql'
import { UserInfoDashboard } from 'src/components/user-info-dashboard'
import { dashboardUserQuery } from './__generated__/dashboardUserQuery.graphql'

const dashboardAccountFragment = graphql`
  fragment dashboardAccountFragment on Account {
    id
    user {
      name
    }
    currentBalance
    credits {
      total
      amount
    }
    debits {
      total
      amount
    }
    transactions {
      amount
      date
      type
    }
  }
`
const usersQuery = graphql`
  query dashboardUsersQuery {
    users {
      id
      name
      email
    }
  }
`

const accountQuery = graphql`
  query dashboardAccountQuery($accountId: ID!) {
    node(id: $accountId) {
      ... on Account {
        ...dashboardAccountFragment
      }
    }
  }
`

const accountsQuery = graphql`
  query dashboardAccountsQuery {
    accounts {
      __id
      ...dashboardAccountFragment
    }
  }
`
const userQuery = graphql`
  query dashboardUserQuery {
    node(id: 1) {
      ... on User {
        __id
        ...userInfoDashboardFragment
      }
    }
  }
`

export default function Dashboard() {
  const {
    accounts: [{ currentBalance, credits, debits, transactions }],
  } = mockData

  const accountId = 'client:Account:1'
  const userId = 'client:User:1'
  const account = useLazyLoadQuery<dashboardAccountQuery>(accountQuery, { accountId })
  const accounts = useClientQuery<dashboardAccountsQuery>(accountsQuery, {})
  const data = useClientQuery<dashboardUserQuery>(userQuery, {})
  const users = useClientQuery<dashboardUsersQuery>(usersQuery, {})
  console.log({
    account,
    accounts,
    users,
    data,
  })

  return (
    <main className="p-8 [&>*]:my-8">
      <UserInfoDashboard user={data.node} />
      <section className="flex w-full flex-row flex-wrap space-x-0 md:flex-nowrap md:space-x-4">
        <DashboardCard className="w-full md:w-1/3" title={'Account Balance'} amount={currentBalance} />
        <DashboardCard
          className="order-3 w-1/2 md:w-1/3"
          title={`${debits.total} Debits in Total`}
          amount={debits.amount}
          type="debit"
        />
        <DashboardCard
          className="order-3 w-1/2 md:w-1/3"
          title={`${credits.total} credits in Total`}
          amount={credits.amount}
          type="credit"
        />
        <Button
          className="order-2 my-4 w-full self-center uppercase md:order-4 md:my-0 md:text-xl lg:w-1/4"
          onClick={() => console.log('')}
        >
          Transfer Money
        </Button>
      </section>

      <div className="space flex flex-col space-x-0 space-y-8 md:flex-row md:space-x-4 md:space-y-0 [&>*]:w-full [&>*]:rounded-md [&>*]:border [&>*]:p-4 md:[&>*]:w-1/2">
        <TransactionBarChart transactions={transactions} />
        <TransactionList transactions={transactions} />
      </div>
    </main>
  )
}
