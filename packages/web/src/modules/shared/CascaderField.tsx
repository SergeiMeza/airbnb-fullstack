import React from 'react'
import { FieldProps } from 'formik'
import { Form, Cascader } from 'antd'

export const CascaderField: React.FunctionComponent<
  FieldProps<any> & {
    prefix?: React.ReactNode
    label?: string
  }
> = ({
  field: { onChange, name, onBlur, value }, // { name, value, onChange, onBlur }
  form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  ...props
}) => {
  return (
    <Form.Item id={name} label={label}>
      <Cascader {...props} onChange={onChange} />
    </Form.Item>
  )
}
