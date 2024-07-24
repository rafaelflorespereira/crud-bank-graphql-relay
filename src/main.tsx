import { RelayEnvironmentProvider } from 'react-relay'
import { RelayEnvironment } from './RelayEnvironment'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import './styles/globals.less'
import './i18n/config'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <App />
  </RelayEnvironmentProvider>,
)
