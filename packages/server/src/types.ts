export interface Context {
  request: any
  connection: any
}

export interface User {
  email: string
  media: Media | null
  firstName: string | null
  lastName: string | null
  birthdate: string | null
}

export interface AuthenticationError {
  path: string
  message: string
}

export interface RegisterResult {
  me: User | null
  token: string | null
  errors: AuthenticationError[]
}

export interface LoginResult {
  me: User | null
  token: string | null
  errors: AuthenticationError[]
}

export interface ForgotPasswordChangeResult {
  errors: AuthenticationError[]
}

export interface UpdateMeMediaResult {
  me: User
  token: String
}

export interface UpdateMeResult {
  me: User
  token: String
}

export interface Media {
  type: MediaType
  fileId: string
  filename: string
  extension: string
  url: string
}

type MediaType = 'PHOTO' | 'VIDEO' | 'VIDEO_STREAM'
