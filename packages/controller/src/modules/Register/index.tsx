import React from 'react'
import gql from 'graphql-tag'
import { useMutation } from 'react-apollo'
import { RegisterMutation, RegisterMutationVariables } from '../../schemaTypes'
import { normalizeErrors } from '../../utils/normalizeErrors'
import { NormalizeErrorMap } from '../../types/NormalizeErrorMap'
import { LoginResult } from '../Login'

export interface RegisterResult {
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

interface Props {
  children: (data: {
    submit: (values: RegisterMutationVariables) => Promise<LoginResult>
  }) => JSX.Element | null
}

export function RegisterController(props: Props) {
  const [registerMutation, { data, loading, error }] = useMutation<
    RegisterMutation,
    RegisterMutationVariables
  >(REGISTER_MUTATION)

  const submit = async (values: RegisterMutationVariables) => {
    const response = await registerMutation({ variables: values })

    console.log('🚀 values:', values)
    console.log('🚀 response:', response)

    if (
      response &&
      response.data &&
      response.data.register &&
      response.data.register.errors
    ) {
      const errors = normalizeErrors(response.data.register.errors)
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

  return props.children({ submit })
}
