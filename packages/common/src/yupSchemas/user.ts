import * as yup from 'yup'

export const passwordNotLongEnough = 'password must be at least 5 characters'
export const invalidEmail = 'email must be a valid email'

export const validUserSchema = yup.object().shape({
  email: yup
    .string()
    .max(255)
    .email(invalidEmail)
    .required(),
  password: yup
    .string()
    .min(5, passwordNotLongEnough)
    .max(255)
    .required(),
})
