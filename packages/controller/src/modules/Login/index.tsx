import React from 'react'
import { useMutation } from 'react-apollo'
import gql from 'graphql-tag'
import { LoginMutation, LoginMutationVariables } from '../../schemaTypes'
import { normalizeErrors } from '../../utils/normalizeErrors'
import { NormalizeErrorMap } from '../../types/NormalizeErrorMap'

export interface LoginResult {
  me: { email: string } | null
  token: string | null
  errors: NormalizeErrorMap | null
}

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      me {
        email
      }
      token
      errors {
        path
        message
      }
    }
  }
`

interface Props {
  children: (data: {
    submit: (values: LoginMutationVariables) => Promise<LoginResult>
  }) => JSX.Element | null
}

export function LoginController(props: Props) {
  const [loginMutation, { data, loading, error }] = useMutation<
    LoginMutation,
    LoginMutationVariables
  >(LOGIN_MUTATION)

  const submit = async (values: LoginMutationVariables) => {
    const response = await loginMutation({ variables: values })

    console.log('🚀 values:', values)
    console.log('🚀 response:', response)

    if (
      response &&
      response.data &&
      response.data.login &&
      response.data.login.errors
    ) {
      const errors = normalizeErrors(response.data.login.errors)
      return {
        me: null,
        token: null,
        errors,
      }
    }

    const login = response.data!.login!
    return {
      me: login.me,
      token: login.token,
      errors: null,
    }
  }

  return props.children({ submit })
}