import { useRelayEnvironment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { commitTransactionCreateLocally } from 'src/store/mutations/createTransaction'

const createTransactionMutation = graphql`
  mutation transferenceMutation($input: CreateTransactionInput!) {
    createTransference(input: $input) {
      id
    }
  }
`
export function Transference() {
  const environment = useRelayEnvironment()
  return (
    <div>
      <button
        onClick={() => {
          commitTransactionCreateLocally(environment, {
            fromId: 'client:Account:1',
            toId: 'client:Account:2',
            amount: 100,
          })
        }}
      >
        Transfer
      </button>
    </div>
  )
}
