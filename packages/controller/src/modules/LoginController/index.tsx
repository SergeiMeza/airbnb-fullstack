import React from 'react'
import { graphql, ChildMutateProps, useMutation } from 'react-apollo'
import gql from 'graphql-tag'
import { LoginMutation, LoginMutationVariables } from '../../schemaTypes'
import { normalizeErrors } from '../../utils/normalizeErrors'

interface Props {
  children: (data: {
    submit: (
      values: LoginMutationVariables,
    ) => Promise<{ [key: string]: string } | null>
  }) => JSX.Element | null
}

class C extends React.PureComponent<
  ChildMutateProps<Props, LoginMutation, LoginMutationVariables>
> {
  submit = async (values: LoginMutationVariables) => {
    console.log('values:', values)
    try {
      const response = await this.props.mutate({
        variables: values,
      })
    } catch (error) {
      // if (response && response.data && response.data.login) {
      //   // show errors
      //   // [{path: "email": message: "inval...."}]
      //   // {email: "inval........"}
      return normalizeErrors(error)
    }
    return null
  }

  render() {
    return this.props.children({ submit: this.submit })
  }
}

const loginMutation = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      path
      message
    }
  }
`

export const LoginController = graphql<
  Props,
  LoginMutation,
  LoginMutationVariables
>(loginMutation)(C as any)