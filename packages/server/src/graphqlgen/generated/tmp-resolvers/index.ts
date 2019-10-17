// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { Resolvers } from "../graphqlgen";

import { Query } from "./Query";
import { User } from "./User";
import { Media } from "./Media";
import { MockUser } from "./MockUser";
import { Mutation } from "./Mutation";
import { RegisterResult } from "./RegisterResult";
import { AuthenticationError } from "./AuthenticationError";
import { LoginResult } from "./LoginResult";
import { UpdateMeResult } from "./UpdateMeResult";
import { UpdateMeMediaResult } from "./UpdateMeMediaResult";
import { CreatePlaceResult } from "./CreatePlaceResult";
import { Place } from "./Place";
import { Amenities } from "./Amenities";
import { ForgotPasswordChangeResult } from "./ForgotPasswordChangeResult";

export const resolvers: Resolvers = {
  Query,
  User,
  Media,
  MockUser,
  Mutation,
  RegisterResult,
  AuthenticationError,
  LoginResult,
  UpdateMeResult,
  UpdateMeMediaResult,
  CreatePlaceResult,
  Place,
  Amenities,
  ForgotPasswordChangeResult
};
