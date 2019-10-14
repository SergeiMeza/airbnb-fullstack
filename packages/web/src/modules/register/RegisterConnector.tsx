import React from 'react'
import { RegisterControllerHooks } from '@airbnb-fullstack/controller'
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
        <RegisterControllerHooks>
          {({ submit }) => <RegisterView submit={submit} />}
        </RegisterControllerHooks>
      </React.Fragment>
    )
  }
}
