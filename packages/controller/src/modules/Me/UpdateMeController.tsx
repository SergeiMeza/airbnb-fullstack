import React from 'react'
import gql from 'graphql-tag'
import { useMutation } from 'react-apollo'
import { UpdateMeMutation, UpdateMeMutationVariables } from '../../schemaTypes'

export interface UpdateMeResult {
  me: {
    email: string
  }
  token: string
}

const UPDATE_ME_MUTATION = gql`
  mutation UpdateMeMutation(
    $firstName: String
    $lastName: String
    $birthdate: DateTime
  ) {
    updateMe(
      firstName: $firstName
      lastName: $lastName
      birthdate: $birthdate
    ) {
      me {
        email
        media {
          type
          fileId
          filename
          extension
          url
        }
        firstName
        lastName
        birthdate
      }
      token
    }
  }
`

interface Props {
  children: (data: {
    submit: (
      values: UpdateMeMutationVariables,
    ) => Promise<UpdateMeResult | null>
  }) => JSX.Element | null
}

export function UpdateMeController(props: Props) {
  const [updateMeMutation, { data, loading, error }] = useMutation<
    UpdateMeMutation,
    UpdateMeMutationVariables
  >(UPDATE_ME_MUTATION)

  const submit = async (values: UpdateMeMutationVariables) => {
    const response = await updateMeMutation({ variables: values })

    console.log('🚀 values:', values)
    console.log('🚀 response:', response)

    return null
  }

  return props.children({ submit })
}
