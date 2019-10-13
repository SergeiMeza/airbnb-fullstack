import React from 'react'
import { FieldProps } from 'formik'
import { Form, Input } from 'antd'

export const InputField: React.FunctionComponent<
  FieldProps<any> & { prefix?: React.ReactNode }
> = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const errorMessage = touched[field.name] && errors[field.name]
  return (
    <Form.Item help={errorMessage} validateStatus={errorMessage ? 'error' : ''}>
      <Input {...field} {...props} />
    </Form.Item>
  )
}
