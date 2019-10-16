/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MeQuery
// ====================================================

export interface MeQuery_me {
  __typename: "User";
  email: string;
}

export interface MeQuery {
  me: MeQuery_me | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SendForgotPasswordMutation
// ====================================================

export interface SendForgotPasswordMutation {
  sendForgotPasswordEmail: boolean | null;
}

export interface SendForgotPasswordMutationVariables {
  email: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginMutation
// ====================================================

export interface LoginMutation_login_me {
  __typename: "User";
  email: string;
}

export interface LoginMutation_login_errors {
  __typename: "AuthenticationError";
  path: string;
  message: string;
}

export interface LoginMutation_login {
  __typename: "LoginResult";
  me: LoginMutation_login_me | null;
  token: string | null;
  errors: LoginMutation_login_errors[] | null;
}

export interface LoginMutation {
  login: LoginMutation_login;
}

export interface LoginMutationVariables {
  email: string;
  password: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateMeMutation
// ====================================================

export interface UpdateMeMutation_updateMe_me_media {
  __typename: "Media";
  type: MediaType;
  fileId: string;
  filename: string;
  extension: string;
  url: string;
}

export interface UpdateMeMutation_updateMe_me {
  __typename: "User";
  email: string;
  media: UpdateMeMutation_updateMe_me_media | null;
  firstName: string | null;
  lastName: string | null;
  birthdate: any | null;
}

export interface UpdateMeMutation_updateMe {
  __typename: "UpdateMeResult";
  me: UpdateMeMutation_updateMe_me;
  token: string;
}

export interface UpdateMeMutation {
  updateMe: UpdateMeMutation_updateMe;
}

export interface UpdateMeMutationVariables {
  firstName?: string | null;
  lastName?: string | null;
  birthdate?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RegisterMutation
// ====================================================

export interface RegisterMutation_register_me {
  __typename: "User";
  email: string;
}

export interface RegisterMutation_register_errors {
  __typename: "AuthenticationError";
  path: string;
  message: string;
}

export interface RegisterMutation_register {
  __typename: "RegisterResult";
  me: RegisterMutation_register_me | null;
  token: string | null;
  errors: RegisterMutation_register_errors[] | null;
}

export interface RegisterMutation {
  register: RegisterMutation_register;
}

export interface RegisterMutationVariables {
  email: string;
  password: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum MediaType {
  PHOTO = "PHOTO",
  VIDEO = "VIDEO",
  VIDEO_STREAM = "VIDEO_STREAM",
}

//==============================================================
// END Enums and Input Objects
//==============================================================
