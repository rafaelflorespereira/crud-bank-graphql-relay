import { Card, CardHeader, CardDescription, CardTitle } from '../ui/card'

type DashboardCardProps = {
  title: string
  amount: number
  icon?: string
  totalNumber?: number
}
export const DashboardCard = ({ amount, title, icon }: DashboardCardProps) => {
  const formattedCurrency = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)
  return (
    <Card>
      <CardHeader>
        <CardDescription>{title}</CardDescription>
        <CardTitle>{formattedCurrency}</CardTitle>
      </CardHeader>
    </Card>
  )
}
