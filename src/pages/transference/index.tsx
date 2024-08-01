import { graphql, useClientQuery, useRelayEnvironment } from 'react-relay'
import { commitTransactionCreateLocally } from 'src/store/mutations/createTransaction'
import { transferenceQuery as QueryType } from './__generated__/transferenceQuery.graphql'
import { useParams } from 'react-router-dom'

const accountsQuery = graphql`
  query transferenceQuery {
    accounts {
      __id
      ...dashboardAccountFragment
    }
  }
`
export function Transference() {
  const accounts = useClientQuery<QueryType>(accountsQuery, {})
  const environment = useRelayEnvironment()
  const params = useParams()
  return (
    <div>
      {/* Select Account */}
      {/* Select Amount  */}
      <button
        onClick={() => {
          commitTransactionCreateLocally(environment, {
            fromId: params.accountId ?? '',
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
