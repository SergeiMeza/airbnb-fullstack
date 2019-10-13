import React from 'react'
import { graphql, ChildMutateProps, useMutation } from 'react-apollo'
import gql from 'graphql-tag'
import {
  RegisterMutation,
  RegisterMutationVariables,
} from './__generated__/RegisterMutation'

interface Props {
  children: (data: {
    submit: (values: RegisterMutationVariables) => Promise<null>
  }) => JSX.Element | null
}

class C extends React.PureComponent<
  ChildMutateProps<Props, RegisterMutation, RegisterMutationVariables>
> {
  submit = async (values: RegisterMutationVariables) => {
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

const registerMutation = gql`
  mutation RegisterMutation($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      path
      message
    }
  }
`

export const RegisterController = graphql<
  Props,
  RegisterMutation,
  RegisterMutationVariables
>(registerMutation)(C as any)

// export function RegisterControllerHook(props: Props) {
//   const submit = (values: RegisterMutationVariables) => {
//     const [response, { loading, error }] = useMutation<
//       RegisterMutation,
//       RegisterMutationVariables
//     >(registerMutation)

//     if (loading) return <p>loading...</p>
//     if (error) return <p>An error occurred</p>

//     console.log('response:', response)
//     return null
//   }

//   return props.children({ submit: submit })
// }
