import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import { ApolloProvider } from 'react-apollo'
import { client } from './apollo'
import { Routes } from './routes'
import './index.css'

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById('root'),
)
serviceWorker.unregister()
