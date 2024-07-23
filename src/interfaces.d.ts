export type User = {
  name: string
  email: string
}
export interface Transaction {
  id: string
  amount: number
  description: string
  date: string
  type: 'credit' | 'debit'
  from: Account
  to: Account
}

type FinancialRecord = { amount: number; total: number; transactions: Transaction[] }
export interface Account {
  id: string
  accountNumber: string
  user: User
  currentBalance: number
  transactions: Transaction[]
  debits: FinancialRecord
  credits: FinancialRecord
}
