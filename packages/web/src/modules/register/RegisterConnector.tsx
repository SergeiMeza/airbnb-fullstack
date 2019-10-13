import React from 'react'
import { RegisterController } from '@airbnb-fullstack/controller'
import { RegisterView } from './ui/RegisterView'

// normal pattern
// container -> view

// react w react-native
// container -> connector -> view[]
// controller -> connector -> view[]

export class RegisterConnector extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <RegisterController>
          {({ submit }) => <RegisterView submit={submit} />}
        </RegisterController>
      </React.Fragment>
    )
  }
}
