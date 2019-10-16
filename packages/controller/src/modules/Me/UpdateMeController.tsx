import React from 'react'
import gql from 'graphql-tag'
import { useMutation } from 'react-apollo'
import { UpdateMeMutation, UpdateMeMutationVariables } from '../../schemaTypes'

export interface UpdateMeResult {
  me: {
    email: string
    firstName: string | null
    lastName: string | null
    media: any
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
    submit: (values: UpdateMeMutationVariables) => Promise<UpdateMeResult>
  }) => JSX.Element | null
}

export function UpdateMeController(props: Props) {
  const [updateMeMutation, { data, loading, error }] = useMutation<
    UpdateMeMutation,
    UpdateMeMutationVariables
  >(UPDATE_ME_MUTATION)

  const submit = async (values: UpdateMeMutationVariables) => {
    const response = await updateMeMutation({ variables: values })

    if (response && response.data && response.data.updateMe)
      return {
        me: {
          ...response.data.updateMe.me,
        },
        token: response.data.updateMe.token,
      }
    else {
      throw Error('server error')
    }
  }

  return props.children({ submit })
}
