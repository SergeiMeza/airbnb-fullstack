import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { RegisterConnector } from '../modules/register/RegisterConnector'
import { LoginConnector } from '../modules/login/LoginConnector'
import { ForgotPasswordConnector } from '../modules/forgotPassword/ForgotPasswordConnector'

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/register' component={RegisterConnector} />
      <Route exact path='/login' component={LoginConnector} />
      <Route exact path='/forgot' component={ForgotPasswordConnector} />
    </Switch>
  </BrowserRouter>
)
