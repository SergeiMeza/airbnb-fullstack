import React from 'react'
import { RouteComponentProps } from 'react-router'
import { RegisterController } from '@airbnb-fullstack/controller'
import { RegisterView } from './ui/RegisterView'

export class RegisterConnector extends React.PureComponent<
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
        <RegisterController>
          {({ submit }) => (
            <RegisterView onFinish={this.onFinish} submit={submit} />
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
