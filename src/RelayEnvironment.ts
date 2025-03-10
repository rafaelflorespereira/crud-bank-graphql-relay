import { Environment, Network, RecordSource, Store, FetchFunction } from 'relay-runtime'
import { initializeAccounts } from './store'
import { mockData } from './data/account'

const HTTP_ENDPOINT = 'http://localhost:5000/graphql'

const fetchFn: FetchFunction = async (request, variables) => {
  const resp = await fetch(HTTP_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/graphql-response+json; charset=utf-8, application/json; charset=utf-8',
      'Content-Type': 'application/json',
      // <-- Additional headers like 'Authorization' would go here
    },
    body: JSON.stringify({
      query: request.text, // <-- The GraphQL document composed by Relay
      variables,
    }),
  })
  console.log('store initialized')

  return await resp.json()
}

function createRelayEnvironment() {
  return new Environment({
    network: Network.create(fetchFn),
    store: new Store(new RecordSource()),
  })
}

export const RelayEnvironment = createRelayEnvironment()
initializeAccounts(RelayEnvironment, mockData)
