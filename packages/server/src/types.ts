export interface Context {
  request: any
  connection: any
}

export interface User {
  email: string
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
