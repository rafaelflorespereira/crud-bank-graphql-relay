import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '../ui/chart'
import { Transaction } from 'src/interfaces'

type ChartDataType = {
  month: string
  credit: number
  debit: number
}[]
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

interface TransactionBarChartProps {
  transactions: Transaction[]
}
export const TransactionBarChart = ({ transactions }: TransactionBarChartProps) => {
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
  )
}
