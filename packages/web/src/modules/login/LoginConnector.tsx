import React from 'react'
import { LoginController } from '@airbnb-fullstack/controller'
import { LoginView } from './ui/LoginView'
import { RouteComponentProps } from 'react-router'

export class LoginConnector extends React.PureComponent<
  RouteComponentProps<{}>
> {
  onFinish = () => {
    const {
      history,
      location: { state },
    } = this.props
    if (state && state.next) {
      return history.push(state.next)
    }
    history.push('/')
  }

  render() {
    return (
      <React.Fragment>
        <LoginController>
          {({ submit }) => (
            <LoginView onFinish={this.onFinish} submit={submit} />
          )}
        </LoginController>
      </React.Fragment>
    )
  }
}
