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

export interface Account {
  user: User
  accountNumber: string
  currentBalance: number
  transactions: Transaction[]
  debits: { amount: number; total: number; transactions: Transaction[] }
  credits: { amount: number; total: number; transactions: Transaction[] }
}
