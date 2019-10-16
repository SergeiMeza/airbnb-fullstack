import React from 'react'
import { withFormik, FormikProps } from 'formik'
import { Layout, Typography, Icon, Button } from 'antd'
import { Form, Input } from '@jbuschke/formik-antd'

import { validUserSchema } from '@airbnb-fullstack/common'
import {
  LoginResult,
  LoginMutationVariables,
} from '@airbnb-fullstack/controller'

interface Props {
  submit: (values: LoginMutationVariables) => Promise<LoginResult>
  onFinish: () => void
}

interface FormValues {
  email: string
  password: string
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    return (
      <>
        <Layout.Header style={{ background: '#fff' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              borderBottom: '1px solid #e8e8e8',
            }}
          >
            <Typography
              style={{
                display: 'inline-block',
              }}
            >
              <Typography.Title
                level={4}
                style={{
                  margin: 'auto 0',
                  display: 'inline-block',
                }}
              >
                Lollipop
              </Typography.Title>
            </Typography>
            <Form
              style={{
                display: 'flex',
                marginTop: 'auto',
                marginBottom: 'auto',
              }}
            >
              <Form.Item
                name='email'
                style={{ marginBottom: 0, marginRight: 10 }}
              >
                <Input
                  name='email'
                  type='email'
                  placeholder='Email'
                  prefix={
                    <Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                />
              </Form.Item>
              <Form.Item
                name='password'
                style={{ marginBottom: 0, marginRight: 10 }}
              >
                <Input
                  name='password'
                  type='password'
                  placeholder='Password'
                  prefix={
                    <Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                />
              </Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                style={{ marginTop: 'auto', marginBottom: 'auto', width: 100 }}
              >
                Log In
              </Button>
            </Form>
          </div>
        </Layout.Header>
      </>
    )
  }
}

export const RegisterHeader = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  validateOnChange: false,
  validateOnBlur: false,
  handleSubmit: async (values, { props, setErrors }) => {
    console.log('🚀 values:', values)
    const loginVariables: LoginMutationVariables = {
      email: values.email,
      password: values.password,
    }
    const result = await props.submit(loginVariables)
    const { me, token } = result
    if (me !== null && token !== null) {
      localStorage.setItem('token', token)
      localStorage.setItem('me', JSON.stringify(me))
      props.onFinish()
    }
    if (result.errors) {
      setErrors(result.errors)
    }
  },
})(C)
