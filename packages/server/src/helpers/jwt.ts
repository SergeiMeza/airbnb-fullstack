import jwt from 'jsonwebtoken'

export const generateToken = (payload: any) =>
  jwt.sign(payload, process.env.JWT_SECRET || 'serverjwtsecret')
