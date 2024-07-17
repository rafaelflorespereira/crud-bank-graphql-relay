import { useTranslation } from 'react-i18next'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
import { DashboardCard } from 'src/components/dashboard-card'
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from 'src/components/ui/chart'
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
    <div>
      <section className="my-8">
        <h3 className="mb-4 text-lg font-semibold text-white">Hello {name}</h3>
      </section>
      <DashboardCard title={'Balance'} amount={currentBalance} />
      <DashboardCard title={`${debits.total} Debits`} amount={debits.amount} />
      <DashboardCard title={`${credits.total} credits`} amount={credits.amount} />

      <section className="my-8">
        <h3 className="mb-4 text-lg font-semibold text-white">Transactions</h3>
        <ChartContainer config={chartConfig} className="min-h-[200px]">
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
    </div>
  )
}
