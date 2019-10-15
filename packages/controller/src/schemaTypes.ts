/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MeQuery
// ====================================================

export interface MeQuery_me {
  __typename: 'User'
  email: string
}

export interface MeQuery {
  me: MeQuery_me | null
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SendForgotPasswordMutation
// ====================================================

export interface SendForgotPasswordMutation {
  sendForgotPasswordEmail: boolean | null
}

export interface SendForgotPasswordMutationVariables {
  email: string
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginMutation
// ====================================================

export interface LoginMutation_login_me {
  __typename: 'User'
  email: string
}

export interface LoginMutation_login_errors {
  __typename: 'AuthenticationError'
  path: string
  message: string
}

export interface LoginMutation_login {
  __typename: 'LoginResult'
  me: LoginMutation_login_me | null
  token: string | null
  errors: LoginMutation_login_errors[] | null
}

export interface LoginMutation {
  login: LoginMutation_login
}

export interface LoginMutationVariables {
  email: string
  password: string
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RegisterMutation
// ====================================================

export interface RegisterMutation_register_me {
  __typename: 'User'
  email: string
}

export interface RegisterMutation_register_errors {
  __typename: 'AuthenticationError'
  path: string
  message: string
}

export interface RegisterMutation_register {
  __typename: 'RegisterResult'
  me: RegisterMutation_register_me | null
  token: string | null
  errors: RegisterMutation_register_errors[] | null
}

export interface RegisterMutation {
  register: RegisterMutation_register
}

export interface RegisterMutationVariables {
  email: string
  password: string
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
