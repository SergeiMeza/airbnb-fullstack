export interface Context {
  request: any
  connection: any
}

export interface User {
  email: string
  password: string
}

export interface Error {
  path: string
  message: string
}
