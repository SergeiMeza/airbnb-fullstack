import React from 'react'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { RegisterConnector } from '../modules/register/RegisterConnector'
import { LoginConnector } from '../modules/login/LoginConnector'
import { ForgotPasswordConnector } from '../modules/forgotPassword/ForgotPasswordConnector'
import { AuthRoute } from '@airbnb-fullstack/controller'

const DummyComponent = () => (
  <div>
    <h1>TEST</h1>
  </div>
)

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/register' component={RegisterConnector} />
      <Route exact path='/login' component={LoginConnector} />
      <Route
        exact
        path='/forgot-password'
        component={ForgotPasswordConnector}
      />
      <Route
        exact
        path='/change-password'
        component={ForgotPasswordConnector}
      />
      <AuthRoute path='/create-listing' component={DummyComponent} />
      <Route path='/' render={() => <Redirect to='/register' />} />
      <Route path='/*' render={() => <Redirect to='/register' />} />
    </Switch>
  </BrowserRouter>
)
