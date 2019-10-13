import React from 'react'
import { LoginController } from '@airbnb-fullstack/controller'
import { LoginView } from './ui/LoginView'

export class LoginConnector extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <LoginController>
          {({ submit }) => <LoginView submit={submit} />}
        </LoginController>
      </React.Fragment>
    )
  }
}
