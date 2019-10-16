import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createUploadLink } from 'apollo-upload-client'
import { setContext } from 'apollo-link-context'

const link = createUploadLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')

  return {
    headers: {
      ...headers,
      'x-auth-token': token ? `Bearer ${token}` : '',
    },
  }
})

export const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
})
