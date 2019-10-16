import React from 'react'
import gql from 'graphql-tag'
import { useMutation } from 'react-apollo'
import {
  UpdateMeMutation,
  UpdateMeMutationVariables,
  UpdateMeMediaMutation,
  UpdateMeMediaMutationVariables,
} from '../../schemaTypes'

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
          mimetype
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

const UPDATE_ME_MEDIA_MUTATION = gql`
  mutation UpdateMeMediaMutation($file: Upload!) {
    updateMeMedia(media: $file) {
      me {
        email
        media {
          mimetype
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
    updateMeSubmit: (
      values: UpdateMeMutationVariables,
    ) => Promise<UpdateMeResult>
    updateMeMediaSubmit: (
      values: UpdateMeMediaMutationVariables,
    ) => Promise<UpdateMeResult>
  }) => JSX.Element | null
}

export function UpdateMeController(props: Props) {
  const [updateMeMutation] = useMutation<
    UpdateMeMutation,
    UpdateMeMutationVariables
  >(UPDATE_ME_MUTATION)

  const [updateMeMediaMutation] = useMutation<
    UpdateMeMediaMutation,
    UpdateMeMediaMutationVariables
  >(UPDATE_ME_MEDIA_MUTATION)

  const updateMeSubmit = async (values: UpdateMeMutationVariables) => {
    const response = await updateMeMutation({ variables: values })

    if (response && response.data && response.data.updateMe)
      return {
        me: {
          ...response.data.updateMe.me,
        },
        token: response.data.updateMe.token,
      }
    else {
      throw Error('controller error')
    }
  }

  const updateMeMediaSubmit = async (
    values: UpdateMeMediaMutationVariables,
  ) => {
    const response = await updateMeMediaMutation({ variables: values })

    if (response && response.data && response.data.updateMeMedia)
      return {
        me: {
          ...response.data.updateMeMedia.me,
        },
        token: response.data.updateMeMedia.token,
      }
    else {
      throw Error('controller error')
    }
  }

  return props.children({ updateMeSubmit, updateMeMediaSubmit })
}
