// Code generated by Prisma (prisma@1.34.3). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type UserType = "GUEST" | "HOST";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "firstName_ASC"
  | "firstName_DESC"
  | "lastName_ASC"
  | "lastName_DESC"
  | "birthdate_ASC"
  | "birthdate_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "phone_ASC"
  | "phone_DESC"
  | "isHost_ASC"
  | "isHost_DESC"
  | "isSuperHost_ASC"
  | "isSuperHost_DESC"
  | "currentUserType_ASC"
  | "currentUserType_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
}>;

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  firstName?: Maybe<String>;
  firstName_not?: Maybe<String>;
  firstName_in?: Maybe<String[] | String>;
  firstName_not_in?: Maybe<String[] | String>;
  firstName_lt?: Maybe<String>;
  firstName_lte?: Maybe<String>;
  firstName_gt?: Maybe<String>;
  firstName_gte?: Maybe<String>;
  firstName_contains?: Maybe<String>;
  firstName_not_contains?: Maybe<String>;
  firstName_starts_with?: Maybe<String>;
  firstName_not_starts_with?: Maybe<String>;
  firstName_ends_with?: Maybe<String>;
  firstName_not_ends_with?: Maybe<String>;
  lastName?: Maybe<String>;
  lastName_not?: Maybe<String>;
  lastName_in?: Maybe<String[] | String>;
  lastName_not_in?: Maybe<String[] | String>;
  lastName_lt?: Maybe<String>;
  lastName_lte?: Maybe<String>;
  lastName_gt?: Maybe<String>;
  lastName_gte?: Maybe<String>;
  lastName_contains?: Maybe<String>;
  lastName_not_contains?: Maybe<String>;
  lastName_starts_with?: Maybe<String>;
  lastName_not_starts_with?: Maybe<String>;
  lastName_ends_with?: Maybe<String>;
  lastName_not_ends_with?: Maybe<String>;
  birthdate?: Maybe<DateTimeInput>;
  birthdate_not?: Maybe<DateTimeInput>;
  birthdate_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  birthdate_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  birthdate_lt?: Maybe<DateTimeInput>;
  birthdate_lte?: Maybe<DateTimeInput>;
  birthdate_gt?: Maybe<DateTimeInput>;
  birthdate_gte?: Maybe<DateTimeInput>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  phone?: Maybe<String>;
  phone_not?: Maybe<String>;
  phone_in?: Maybe<String[] | String>;
  phone_not_in?: Maybe<String[] | String>;
  phone_lt?: Maybe<String>;
  phone_lte?: Maybe<String>;
  phone_gt?: Maybe<String>;
  phone_gte?: Maybe<String>;
  phone_contains?: Maybe<String>;
  phone_not_contains?: Maybe<String>;
  phone_starts_with?: Maybe<String>;
  phone_not_starts_with?: Maybe<String>;
  phone_ends_with?: Maybe<String>;
  phone_not_ends_with?: Maybe<String>;
  isHost?: Maybe<Boolean>;
  isHost_not?: Maybe<Boolean>;
  isSuperHost?: Maybe<Boolean>;
  isSuperHost_not?: Maybe<Boolean>;
  currentUserType?: Maybe<UserType>;
  currentUserType_not?: Maybe<UserType>;
  currentUserType_in?: Maybe<UserType[] | UserType>;
  currentUserType_not_in?: Maybe<UserType[] | UserType>;
  userLocation?: Maybe<UserLocationWhereInput>;
  profilePicture?: Maybe<PictureWhereInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface UserLocationWhereInput {
  type?: Maybe<String>;
  type_not?: Maybe<String>;
  type_in?: Maybe<String[] | String>;
  type_not_in?: Maybe<String[] | String>;
  type_lt?: Maybe<String>;
  type_lte?: Maybe<String>;
  type_gt?: Maybe<String>;
  type_gte?: Maybe<String>;
  type_contains?: Maybe<String>;
  type_not_contains?: Maybe<String>;
  type_starts_with?: Maybe<String>;
  type_not_starts_with?: Maybe<String>;
  type_ends_with?: Maybe<String>;
  type_not_ends_with?: Maybe<String>;
  latitude?: Maybe<Float>;
  latitude_not?: Maybe<Float>;
  latitude_in?: Maybe<Float[] | Float>;
  latitude_not_in?: Maybe<Float[] | Float>;
  latitude_lt?: Maybe<Float>;
  latitude_lte?: Maybe<Float>;
  latitude_gt?: Maybe<Float>;
  latitude_gte?: Maybe<Float>;
  longitude?: Maybe<Float>;
  longitude_not?: Maybe<Float>;
  longitude_in?: Maybe<Float[] | Float>;
  longitude_not_in?: Maybe<Float[] | Float>;
  longitude_lt?: Maybe<Float>;
  longitude_lte?: Maybe<Float>;
  longitude_gt?: Maybe<Float>;
  longitude_gte?: Maybe<Float>;
  AND?: Maybe<UserLocationWhereInput[] | UserLocationWhereInput>;
}

export interface PictureWhereInput {
  url?: Maybe<String>;
  url_not?: Maybe<String>;
  url_in?: Maybe<String[] | String>;
  url_not_in?: Maybe<String[] | String>;
  url_lt?: Maybe<String>;
  url_lte?: Maybe<String>;
  url_gt?: Maybe<String>;
  url_gte?: Maybe<String>;
  url_contains?: Maybe<String>;
  url_not_contains?: Maybe<String>;
  url_starts_with?: Maybe<String>;
  url_not_starts_with?: Maybe<String>;
  url_ends_with?: Maybe<String>;
  url_not_ends_with?: Maybe<String>;
  AND?: Maybe<PictureWhereInput[] | PictureWhereInput>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  firstName?: Maybe<String>;
  lastName?: Maybe<String>;
  birthdate?: Maybe<DateTimeInput>;
  email: String;
  password: String;
  phone?: Maybe<String>;
  isHost?: Maybe<Boolean>;
  isSuperHost?: Maybe<Boolean>;
  currentUserType?: Maybe<UserType>;
  userLocation?: Maybe<UserLocationCreateOneInput>;
  profilePicture?: Maybe<PictureCreateOneInput>;
}

export interface UserLocationCreateOneInput {
  create?: Maybe<UserLocationCreateInput>;
}

export interface UserLocationCreateInput {
  type?: Maybe<String>;
  coordinates?: Maybe<UserLocationCreatecoordinatesInput>;
  latitude: Float;
  longitude: Float;
}

export interface UserLocationCreatecoordinatesInput {
  set?: Maybe<Float[] | Float>;
}

export interface PictureCreateOneInput {
  create?: Maybe<PictureCreateInput>;
}

export interface PictureCreateInput {
  url: String;
}

export interface UserUpdateInput {
  firstName?: Maybe<String>;
  lastName?: Maybe<String>;
  birthdate?: Maybe<DateTimeInput>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  phone?: Maybe<String>;
  isHost?: Maybe<Boolean>;
  isSuperHost?: Maybe<Boolean>;
  currentUserType?: Maybe<UserType>;
  userLocation?: Maybe<UserLocationUpdateOneInput>;
  profilePicture?: Maybe<PictureUpdateOneInput>;
}

export interface UserLocationUpdateOneInput {
  create?: Maybe<UserLocationCreateInput>;
  update?: Maybe<UserLocationUpdateDataInput>;
  upsert?: Maybe<UserLocationUpsertNestedInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
}

export interface UserLocationUpdateDataInput {
  type?: Maybe<String>;
  coordinates?: Maybe<UserLocationUpdatecoordinatesInput>;
  latitude?: Maybe<Float>;
  longitude?: Maybe<Float>;
}

export interface UserLocationUpdatecoordinatesInput {
  set?: Maybe<Float[] | Float>;
}

export interface UserLocationUpsertNestedInput {
  update: UserLocationUpdateDataInput;
  create: UserLocationCreateInput;
}

export interface PictureUpdateOneInput {
  create?: Maybe<PictureCreateInput>;
  update?: Maybe<PictureUpdateDataInput>;
  upsert?: Maybe<PictureUpsertNestedInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
}

export interface PictureUpdateDataInput {
  url?: Maybe<String>;
}

export interface PictureUpsertNestedInput {
  update: PictureUpdateDataInput;
  create: PictureCreateInput;
}

export interface UserUpdateManyMutationInput {
  firstName?: Maybe<String>;
  lastName?: Maybe<String>;
  birthdate?: Maybe<DateTimeInput>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  phone?: Maybe<String>;
  isHost?: Maybe<Boolean>;
  isSuperHost?: Maybe<Boolean>;
  currentUserType?: Maybe<UserType>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface User {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  firstName?: String;
  lastName?: String;
  birthdate?: DateTimeOutput;
  email: String;
  password: String;
  phone?: String;
  isHost: Boolean;
  isSuperHost: Boolean;
  currentUserType: UserType;
  userLocation?: UserLocation | null;
  profilePicture?: Picture | null;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  birthdate: () => Promise<DateTimeOutput>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  phone: () => Promise<String>;
  isHost: () => Promise<Boolean>;
  isSuperHost: () => Promise<Boolean>;
  currentUserType: () => Promise<UserType>;
  userLocation: <T = UserLocationPromise>() => T;
  profilePicture: <T = PicturePromise>() => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  firstName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
  birthdate: () => Promise<AsyncIterator<DateTimeOutput>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  phone: () => Promise<AsyncIterator<String>>;
  isHost: () => Promise<AsyncIterator<Boolean>>;
  isSuperHost: () => Promise<AsyncIterator<Boolean>>;
  currentUserType: () => Promise<AsyncIterator<UserType>>;
  userLocation: <T = UserLocationSubscription>() => T;
  profilePicture: <T = PictureSubscription>() => T;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  birthdate: () => Promise<DateTimeOutput>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  phone: () => Promise<String>;
  isHost: () => Promise<Boolean>;
  isSuperHost: () => Promise<Boolean>;
  currentUserType: () => Promise<UserType>;
  userLocation: <T = UserLocationPromise>() => T;
  profilePicture: <T = PicturePromise>() => T;
}

export interface UserLocation {
  type: String;
  coordinates: Float[];
  latitude: Float;
  longitude: Float;
}

export interface UserLocationPromise
  extends Promise<UserLocation>,
    Fragmentable {
  type: () => Promise<String>;
  coordinates: () => Promise<Float[]>;
  latitude: () => Promise<Float>;
  longitude: () => Promise<Float>;
}

export interface UserLocationSubscription
  extends Promise<AsyncIterator<UserLocation>>,
    Fragmentable {
  type: () => Promise<AsyncIterator<String>>;
  coordinates: () => Promise<AsyncIterator<Float[]>>;
  latitude: () => Promise<AsyncIterator<Float>>;
  longitude: () => Promise<AsyncIterator<Float>>;
}

export interface UserLocationNullablePromise
  extends Promise<UserLocation | null>,
    Fragmentable {
  type: () => Promise<String>;
  coordinates: () => Promise<Float[]>;
  latitude: () => Promise<Float>;
  longitude: () => Promise<Float>;
}

export interface Picture {
  url: String;
}

export interface PicturePromise extends Promise<Picture>, Fragmentable {
  url: () => Promise<String>;
}

export interface PictureSubscription
  extends Promise<AsyncIterator<Picture>>,
    Fragmentable {
  url: () => Promise<AsyncIterator<String>>;
}

export interface PictureNullablePromise
  extends Promise<Picture | null>,
    Fragmentable {
  url: () => Promise<String>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  firstName?: String;
  lastName?: String;
  birthdate?: DateTimeOutput;
  email: String;
  password: String;
  phone?: String;
  isHost: Boolean;
  isSuperHost: Boolean;
  currentUserType: UserType;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  birthdate: () => Promise<DateTimeOutput>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  phone: () => Promise<String>;
  isHost: () => Promise<Boolean>;
  isSuperHost: () => Promise<Boolean>;
  currentUserType: () => Promise<UserType>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  firstName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
  birthdate: () => Promise<AsyncIterator<DateTimeOutput>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  phone: () => Promise<AsyncIterator<String>>;
  isHost: () => Promise<AsyncIterator<Boolean>>;
  isSuperHost: () => Promise<AsyncIterator<Boolean>>;
  currentUserType: () => Promise<AsyncIterator<UserType>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
*/
export type Float = number;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "UserType",
    embedded: false
  },
  {
    name: "UserLocation",
    embedded: true
  },
  {
    name: "Picture",
    embedded: true
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `${process.env["PRISMA_ENDPOINT"]}`
});
export const prisma = new Prisma();
