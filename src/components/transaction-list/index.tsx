import { formattedCurrency } from 'src/lib/utils'
import { Table, TableBody } from '../ui/table'
import { Transaction } from 'src/interfaces'
interface TransactionListProps {
  transactions: Transaction[]
}
export const TransactionList = ({ transactions }: TransactionListProps) => {
  console.log(transactions)
  return (
    <section>
      <h3 className="mb-4 text-lg font-semibold text-white">Transaction Details</h3>
      <Table className="border">
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
                <td>
                  <p
                    className={
                      type ? (type === 'credit' ? 'text-[hsl(var(--positive))]' : 'text-destructive') : 'text-white'
                    }
                  >
                    {(type === 'credit' ? '+' : '-') + formattedCurrency(amount)}
                  </p>
                </td>
              </tr>
            )
          })}
        </TableBody>
      </Table>
    </section>
  )
}
