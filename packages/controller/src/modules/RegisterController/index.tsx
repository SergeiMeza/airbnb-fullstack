import React from 'react'
import { useMutation } from 'react-apollo'
import gql from 'graphql-tag'
import { RegisterMutation, RegisterMutationVariables } from '../../schemaTypes'
import { NormalizeErrorMap } from '../../types/NormalizeErrorMap'
// import { normalizeErrors } from '../../utils/normalizeErrors'

const REGISTER_MUTATION = gql`
  mutation RegisterMutation($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      path
      message
    }
  }
`

interface Props {
  children: (data: {
    submit: (
      values: RegisterMutationVariables,
    ) => Promise<NormalizeErrorMap | null>
  }) => JSX.Element | null
}

export function RegisterController(props: Props) {
  const [registerMutation, { data, loading, error }] = useMutation<
    RegisterMutation,
    RegisterMutationVariables
  >(REGISTER_MUTATION)

  // if (loading) return <p>loading</p>
  // if (error) return <p>error: {error.message}</p>

  const submit = async (values: RegisterMutationVariables) => {
    console.log('🚀 values:', values)
    const response = await registerMutation({ variables: values })
    console.log('🚀 response:', response)
    return null
  }

  return props.children({ submit })
}
