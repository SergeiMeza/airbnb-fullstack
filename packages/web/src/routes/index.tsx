import React from 'react'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { RegisterConnector } from '../modules/register/RegisterConnector'
import { UpdateMeConnector } from '../modules/me/UpdateMeConnector'
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
      <Route exact path='/login' component={LoginConnector} />
      <Route path='/register' render={() => <Redirect to='/' />} />
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

      <AuthRoute path='/new-user' component={UpdateMeConnector} />
      <AuthRoute path='/create-listing' component={DummyComponent} />

      <AuthRoute exact path='/home' component={DummyComponent} />

      <Route exact path='/' component={RegisterConnector} />
      <Route path='/*' render={() => <Redirect to='/' />} />
    </Switch>
  </BrowserRouter>
)
