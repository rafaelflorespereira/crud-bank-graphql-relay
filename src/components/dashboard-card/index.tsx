import { formattedCurrency } from 'src/lib/utils'
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
  return (
    <Card className={className}>
      <CardHeader>
        <CardDescription>{title}</CardDescription>
        <CardTitle
          className={type ? (type === 'credit' ? 'text-[hsl(var(--positive))]' : 'text-destructive') : 'text-white'}
        >
          {formattedCurrency(amount)}
        </CardTitle>
      </CardHeader>
    </Card>
  )
}
