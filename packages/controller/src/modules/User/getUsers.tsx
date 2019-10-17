import React from 'react'
import gql from 'graphql-tag'

export interface UsersResult {
  users: any[]
  loading: boolean
  errors: string[] | undefined
}

export const USERS_QUERY = gql`
  query UsersQuery($page: Int!, $limit: Int!) {
    users(page: $page, limit: $limit) {
      id
      first_name
      last_name
      email
      gender
      company
      bio
    }
  }
`

// interface Props {
//   children: (data: {
//     loadPage: (values: UsersQueryVariables) => Promise<UsersResult>
//   }) => JSX.Element | null
// }

// export function UsersController(props: Props) {
//   const { data, fetchMore } = useQuery<UsersQuery, UsersQueryVariables>(
//     USERS_QUERY,
//     {
//       skip: true,
//     },
//   )

//   const loadPage = async (values: UsersQueryVariables) => {
//     const { data, errors, loading } = await fetchMore({
//       variables: values,
//       updateQuery: (previous, { fetchMoreResult }) => {
//         return fetchMoreResult || previous
//       },
//     })

//     return {
//       users: data.users,
//       loading,
//       errors: errors ? errors.map(error => error.message) : undefined,
//     }
//   }

//   return props.children({ loadPage })
// }
