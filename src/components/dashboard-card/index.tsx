import { Card, CardHeader, CardDescription, CardTitle } from '../ui/card'

type DashboardCardProps = {
  title: string
  amount: number
  icon?: string
  totalNumber?: number
  type?: string
  className?: string
}
export const DashboardCard = ({ amount, title, icon, type, className }: DashboardCardProps) => {
  const formattedCurrency = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)
  return (
    <Card className={className}>
      <CardHeader>
        <CardDescription>{title}</CardDescription>
        <CardTitle
          className={type ? (type === 'credit' ? 'text-[hsl(var(--positive))]' : 'text-destructive') : 'text-white'}
        >
          {formattedCurrency}
        </CardTitle>
      </CardHeader>
    </Card>
  )
}
