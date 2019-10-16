import React from 'react'
import { RouteComponentProps } from 'react-router'
import { RegisterController } from '@airbnb-fullstack/controller'
import { RegisterView } from './ui/RegisterView'

export class RegisterConnector extends React.PureComponent<
  RouteComponentProps<{}>
> {
  onRegisterFinish = () => {
    const { history } = this.props
    history.push('/home')
  }

  onLoginFinish = () => {
    const { history } = this.props
    history.push('/home')
  }

  render() {
    return (
      <React.Fragment>
        <RegisterController>
          {({ registerSubmit, loginSubmit }) => (
            <RegisterView
              onRegisterFinish={this.onRegisterFinish}
              onLoginFinish={this.onLoginFinish}
              registerSubmit={registerSubmit}
              loginSubmit={loginSubmit}
            />
          )}
        </RegisterController>
      </React.Fragment>
    )
  }
}

// normal pattern
// container -> view

// react w react-native
// container -> connector -> view[]
// controller -> connector -> view[]
