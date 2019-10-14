import React from 'react'
import { graphql, ChildMutateProps, useMutation } from 'react-apollo'
import gql from 'graphql-tag'
import { RegisterMutation, RegisterMutationVariables } from '../../schemaTypes'
import { NormalizeErrorMap } from '../../types/NormalizeErrorMap'
import { normalizeErrors } from '../../utils/normalizeErrors'

interface Props {
  children: (data: {
    submit: (
      values: RegisterMutationVariables,
    ) => Promise<NormalizeErrorMap | null>
  }) => JSX.Element | null
}

const REGISTER_MUTATION = gql`
  mutation RegisterMutation($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      path
      message
    }
  }
`

export function RegisterControllerHooks(props: Props) {
  const [registerMutation, { data, loading, error }] = useMutation<
    RegisterMutation,
    RegisterMutationVariables
  >(REGISTER_MUTATION)

  // if (loading) return <p>loading</p>
  // if (error) return <p>error: {error.message}</p>

  const submit = async (values: RegisterMutationVariables) => {
    const result = await registerMutation({ variables: values })
    return null
  }

  return props.children({ submit })
}
