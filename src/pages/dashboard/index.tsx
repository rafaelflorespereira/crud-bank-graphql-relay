import { useTranslation } from 'react-i18next'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
import { DashboardCard } from 'src/components/dashboard-card'
import { Button } from 'src/components/ui/button'
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from 'src/components/ui/chart'
import { Table, TableBody, TableHeader } from 'src/components/ui/table'
import { mockData } from 'src/data/account'
import { Transaction } from 'src/interfaces'

type ChartDataType = {
  month: string
  credit: number
  debit: number
}[]
export default function Dashboard() {
  const { t } = useTranslation('translation')
  const {
    accounts: [
      {
        user: { name },
        accountNumber,
        currentBalance,
        credits,
        debits,
        transactions,
      },
    ],
  } = mockData

  const chartConfig = {
    credit: {
      label: 'Credits',
      color: 'hsl(var(--positive))',
    },
    debit: {
      label: 'Debits',
      color: 'hsl(var(--destructive))',
    },
  }

  const formatTransactionsToChartData = (transactions: Transaction[]) => {
    return transactions.reduce((acc: ChartDataType, transaction: Transaction) => {
      const { amount, type } = transaction
      const date = new Date(transaction.date)
      const month = date.toLocaleString('default', { month: 'long' })
      const year = date.getFullYear()
      const monthYear = `${month} ${year}`

      const index = acc.findIndex((item) => item.month === monthYear)
      if (index === -1) {
        acc.push({
          month: monthYear,
          credit: type === 'credit' ? amount : 0,
          debit: type === 'debit' ? amount : 0,
        })
      } else {
        acc[index] = {
          ...acc[index],
          credit: type === 'credit' ? acc[index].credit + amount : acc[index].credit,
          debit: type === 'debit' ? acc[index].debit + amount : acc[index].debit,
        }
      }

      return acc
    }, [] as ChartDataType)
  }

  return (
    <main className="p-8 [&>*]:my-8">
      <section className="my-8">
        <h2 className="mb-4 text-2xl font-semibold text-white">Hello {name}</h2>
        <div></div>
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
        <Button className="order-2 w-full self-center uppercase md:order-4 md:text-xl lg:w-1/4">Transfer Money</Button>
      </section>

      <div className="space flex flex-col space-x-0 space-y-8 md:flex-row md:space-x-4 md:space-y-0 [&>*]:w-full [&>*]:rounded-md [&>*]:border [&>*]:p-4 md:[&>*]:w-1/2">
        <section>
          <h3 className="mb-4 text-lg font-semibold text-white">Total Transactions</h3>
          <ChartContainer config={chartConfig} className="min-h-[100px] ">
            <BarChart accessibilityLayer data={formatTransactionsToChartData(transactions)}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey={'month'}
                tick={{ fill: 'white' }}
                tickLine={{ stroke: 'white' }}
                axisLine={{ stroke: 'white' }}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="credit" fill={chartConfig.credit.color} />
              <Bar dataKey="debit" fill={chartConfig.debit.color} />
            </BarChart>
          </ChartContainer>
        </section>
        <section>
          <h3 className="mb-4 text-lg font-semibold text-white">Transaction Details</h3>
          <Table className="border">
            <TableHeader></TableHeader>
            <TableBody>
              {transactions.map((transaction, index) => {
                const {
                  type,
                  amount,
                  to: {
                    user: { name, email },
                  },
                } = transaction
                return (
                  <tr key={index} className="border-b [&>td]:p-1 md:[&>td]:p-2">
                    <td className="flex flex-col">
                      <h4 className="text-base text-white">{name}</h4>
                      <td className="text-sm text-muted-foreground">{email}</td>
                    </td>
                    <td>
                      {Intl.DateTimeFormat('en-US', {
                        month: 'short',
                        day: '2-digit',
                        year: 'numeric',
                      }).format(new Date(transaction.date))}
                    </td>
                    <td>{type === 'credit' ? '+' : '-' + amount}</td>
                  </tr>
                )
              })}
            </TableBody>
          </Table>
        </section>
      </div>
    </main>
  )
}
