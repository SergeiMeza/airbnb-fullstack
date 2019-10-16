// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { Resolvers } from "../graphqlgen";

import { Query } from "./Query";
import { User } from "./User";
import { Media } from "./Media";
import { Mutation } from "./Mutation";
import { RegisterResult } from "./RegisterResult";
import { AuthenticationError } from "./AuthenticationError";
import { LoginResult } from "./LoginResult";
import { UpdateMeResult } from "./UpdateMeResult";
import { UpdateMeMediaResult } from "./UpdateMeMediaResult";
import { ForgotPasswordChangeResult } from "./ForgotPasswordChangeResult";

export const resolvers: Resolvers = {
  Query,
  User,
  Media,
  Mutation,
  RegisterResult,
  AuthenticationError,
  LoginResult,
  UpdateMeResult,
  UpdateMeMediaResult,
  ForgotPasswordChangeResult
};
