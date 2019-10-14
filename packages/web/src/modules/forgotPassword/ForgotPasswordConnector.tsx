import React from 'react'
import { ForgotPasswordController } from '@airbnb-fullstack/controller'
import { ForgotPasswordView } from './ui/ForgotPasswordView'

export class ForgotPasswordConnector extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <ForgotPasswordController>
          {({ submit }) => <ForgotPasswordView submit={submit} />}
        </ForgotPasswordController>
      </React.Fragment>
    )
  }
}
