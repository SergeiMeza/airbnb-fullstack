import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { RegisterConnector } from '../modules/register/RegisterConnector'
import { LoginConnector } from '../modules/login/LoginConnector'

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/register' component={RegisterConnector} />
      <Route exact path='/login' component={LoginConnector} />
    </Switch>
  </BrowserRouter>
)
