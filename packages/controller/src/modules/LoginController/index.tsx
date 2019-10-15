import React from 'react'
import { useMutation } from 'react-apollo'
import gql from 'graphql-tag'
import { LoginMutation, LoginMutationVariables } from '../../schemaTypes'
import { normalizeErrors } from '../../utils/normalizeErrors'
import { NormalizeErrorMap } from '../../types/NormalizeErrorMap'

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      path
      message
    }
  }
`

interface Props {
  children: (data: {
    submit: (
      values: LoginMutationVariables,
    ) => Promise<NormalizeErrorMap | null>
  }) => JSX.Element | null
}

export function LoginController(props: Props) {
  const [loginMutation, { data, loading, error }] = useMutation<
    LoginMutation,
    LoginMutationVariables
  >(LOGIN_MUTATION)

  // if (loading) return <p>loading</p>
  // if (error) return <p>error: {error.message}</p>

  const submit = async (values: LoginMutationVariables) => {
    console.log('🚀 values:', values)
    const response = await loginMutation({ variables: values })
    console.log('🚀 response:', response)

    if (response && response.data && response.data.login) {
      return normalizeErrors(response.data.login)
    }
    return null
  }

  return props.children({ submit })
}
