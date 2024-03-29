import React from 'react'
import { RouteComponentProps } from 'react-router'
import { LoginController } from '@airbnb-fullstack/controller'
import { LoginView } from './ui/LoginView'

export class LoginConnector extends React.PureComponent<
  RouteComponentProps<{}>
> {
  onFinish = () => {
    const {
      history,
      location: { state },
    } = this.props
    if (
      state &&
      state.next &&
      state.next !== '/login' &&
      state.next !== '/register' &&
      state.next !== '/forgot-password'
    ) {
      console.log('next:', state.next)
      return history.push(state.next)
    }
    history.push('/home')
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
