import React from 'react'
import { Form, Icon, Button } from 'antd'
import { withFormik, FormikProps, Field, Form as FForm } from 'formik'
import { validUserSchema } from '@airbnb-fullstack/common'
import { InputField } from '../../shared/InputField'
import { Link } from 'react-router-dom'

interface FormValues {
  email: string
  password: string
}

interface Props {
  submit: (values: FormValues) => Promise<{ [key: string]: string } | null>
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    return (
      <FForm style={{ paddingTop: 50, display: 'flex' }}>
        <div style={{ width: 400, margin: 'auto' }}>
          <Field
            name='email'
            prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder='Email'
            component={InputField}
          />
          <Field
            name='password'
            type='password'
            prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder='Password'
            component={InputField}
          />
          <Form.Item>
            <a className='login-form-forgot' href=''>
              Forgot password
            </a>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'
              style={{ display: 'block', width: 400 }}
            >
              Login
            </Button>
            Or <Link to='/register'>register now!</Link>
          </Form.Item>
        </div>
      </FForm>
    )
  }
}

export const LoginView = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({ email: '', password: '' }),
  validateOnChange: false,
  validateOnBlur: false,
  handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
    const errors = await props.submit(values)
    if (errors) {
      setErrors(errors)
    }
  },
})(C)
