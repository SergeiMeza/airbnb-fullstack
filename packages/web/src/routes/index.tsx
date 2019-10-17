import React from 'react'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { RegisterConnector } from '../modules/register/RegisterConnector'
import { UpdateMeConnector } from '../modules/me/UpdateMeConnector'
import { LoginConnector } from '../modules/login/LoginConnector'
import { ForgotPasswordConnector } from '../modules/forgotPassword/ForgotPasswordConnector'
import { AuthRoute } from '@airbnb-fullstack/controller'
import { EmptyView } from '../modules/shared'
import { CreatePlaceConnector } from '../modules/places/CreatePlaceConnector'
import { UsersConnector } from '../modules/users/UsersConnector'

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

      <AuthRoute exact path='/users' component={UsersConnector} />

      <AuthRoute path='/new-user' component={UpdateMeConnector} />
      <AuthRoute path='/create-place' component={CreatePlaceConnector} />
      <AuthRoute exact path='/home' component={EmptyView} />

      <Route
        exact
        path='/'
        component={
          localStorage.getItem('token') ? EmptyView : RegisterConnector
        }
      />
      <Route path='/*' render={() => <Redirect to='/' />} />
    </Switch>
  </BrowserRouter>
)
