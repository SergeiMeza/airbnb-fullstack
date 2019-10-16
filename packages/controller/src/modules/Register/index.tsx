import React from 'react'
import gql from 'graphql-tag'
import { useMutation } from 'react-apollo'
import {
  RegisterMutation,
  RegisterMutationVariables,
  LoginMutation,
  LoginMutationVariables,
} from '../../schemaTypes'
import { normalizeErrors } from '../../utils/normalizeErrors'
import { NormalizeErrorMap } from '../../types/NormalizeErrorMap'

export interface RegisterResult {
  me: { email: string } | null
  token: string | null
  errors: NormalizeErrorMap | null
}

export interface LoginResult {
  me: { email: string } | null
  token: string | null
  errors: NormalizeErrorMap | null
}

const REGISTER_MUTATION = gql`
  mutation RegisterMutation($email: String!, $password: String!) {
    register(email: $email, password: $password) {
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
    registerSubmit: (values: RegisterMutationVariables) => Promise<LoginResult>
    loginSubmit: (values: LoginMutationVariables) => Promise<LoginResult>
  }) => JSX.Element | null
}

export function RegisterController(props: Props) {
  const [registerMutation] = useMutation<
    RegisterMutation,
    RegisterMutationVariables
  >(REGISTER_MUTATION)

  const [loginMutation] = useMutation<LoginMutation, LoginMutationVariables>(
    LOGIN_MUTATION,
  )

  const registerSubmit = async (values: RegisterMutationVariables) => {
    const response = await registerMutation({ variables: values })

    console.log('🚀 values:', values)
    console.log('🚀 response:', response)

    if (
      response &&
      response.data &&
      response.data.register &&
      (!response.data.register.me || !response.data.register.token)
    ) {
      const errors = normalizeErrors(response.data.register.errors!)
      return {
        me: null,
        token: null,
        errors,
      }
    }

    const register = response.data!.register!
    return {
      me: register.me,
      token: register.token,
      errors: null,
    }
  }

  const loginSubmit = async (values: LoginMutationVariables) => {
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

  return props.children({ registerSubmit, loginSubmit })
}
