import React from 'react'
import { graphql, ChildMutateProps, useMutation } from 'react-apollo'
import gql from 'graphql-tag'
import {
  SendForgotPasswordMutation,
  SendForgotPasswordMutationVariables,
} from '../../schemaTypes'

interface Props {
  children: (data: {
    submit: (values: SendForgotPasswordMutationVariables) => Promise<null>
  }) => JSX.Element | null
}

class C extends React.PureComponent<
  ChildMutateProps<
    Props,
    SendForgotPasswordMutation,
    SendForgotPasswordMutationVariables
  >
> {
  submit = async (values: SendForgotPasswordMutationVariables) => {
    console.log('values:', values)
    const response = await this.props.mutate({
      variables: values,
    })

    console.log('response:', response)

    return null
  }

  render() {
    return this.props.children({ submit: this.submit })
  }
}

const FORGOT_PASSWORD_MUTATION = gql`
  mutation SendForgotPasswordMutation($email: String!) {
    sendForgotPasswordEmail(email: $email)
  }
`

export const ForgotPasswordController = graphql<
  Props,
  SendForgotPasswordMutation,
  SendForgotPasswordMutationVariables
>(FORGOT_PASSWORD_MUTATION)(C as any)
