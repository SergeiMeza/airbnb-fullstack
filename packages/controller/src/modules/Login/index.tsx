import React from 'react'
import { useMutation } from 'react-apollo'
import { LoginMutation, LoginMutationVariables } from '../../schemaTypes'
import { normalizeErrors } from '../../utils/normalizeErrors'
import { LoginResult, LOGIN_MUTATION } from '../Register'

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

    if (
      response &&
      response.data &&
      response.data.login &&
      (!response.data.login.me || !response.data.login.token)
    ) {
      const errors = normalizeErrors(response.data.login.errors!)
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
