import { useClientQuery } from 'react-relay'
import { graphql } from 'relay-runtime'
import { DashboardCard } from 'src/components/dashboard-card'
import { TransactionBarChart } from 'src/components/transaction-bar-chart'
import { TransactionList } from 'src/components/transaction-list'
import { Button } from 'src/components/ui/button'
import { mockData } from 'src/data/account'
import { dashboard1Query } from './__generated__/dashboard1Query.graphql'
import { dashboardAccountsQuery } from './__generated__/dashboardAccountsQuery.graphql'
import { dashboardQuery } from './__generated__/dashboardQuery.graphql'

const AccountFragment = graphql`
  fragment AccountFragment on Account {
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

export default function Dashboard() {
  const {
    accounts: [
      {
        user: { name },
        currentBalance,
        credits,
        debits,
        transactions,
      },
    ],
  } = mockData

  const account = useClientQuery<dashboardQuery>(
    graphql`
      query dashboardQuery($id: ID!) {
        account(id: $id) {
          ...AccountFragment
        }
      }
    `,
    { id: 'client:Account:0' },
  )
  console.log({ account })
  const accounts = useClientQuery<dashboardAccountsQuery>(
    graphql`
      query dashboardAccountsQuery {
        accounts {
          ...AccountFragment
        }
      }
    `,
    {},
  )
  console.log({ accounts })
  const usersData = useClientQuery<dashboard1Query>(
    graphql`
      query dashboard1Query {
        users {
          id
          name
          email
        }
      }
    `,
    {},
  )
  console.log({ usersData })

  return (
    <main className="p-8 [&>*]:my-8">
      <section className="my-8">
        <h2 className="mb-4 text-2xl font-semibold text-white">Hello {name}</h2>
      </section>

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
        <Button className="order-2 my-4 w-full self-center uppercase md:order-4 md:my-0 md:text-xl lg:w-1/4">
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
