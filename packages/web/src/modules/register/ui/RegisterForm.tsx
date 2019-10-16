import React from 'react'
import { Link } from 'react-router-dom'
import { withFormik, FormikProps } from 'formik'
import { Card, Icon, Typography, Divider, Button } from 'antd'
import { Form, Input, Cascader, Radio } from '@jbuschke/formik-antd'

import { validUserSchema } from '@airbnb-fullstack/common'
import {
  RegisterResult,
  RegisterMutationVariables,
} from '@airbnb-fullstack/controller'

interface Props {
  submit: (values: RegisterMutationVariables) => Promise<RegisterResult>
  onFinish: () => void
}

interface FormValues {
  email: string
  password: string
  firstName: string
  lastName: string
  birthdayMonth: string[]
  birthdayDay: string[]
  birthdayYear: string[]
  gender: number | null
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  monthOptions = [
    {
      value: '01',
      label: 'January',
    },
    {
      value: '02',
      label: 'February',
    },
    {
      value: '03',
      label: 'March',
    },
    {
      value: '04',
      label: 'April',
    },
    {
      value: '05',
      label: 'May',
    },
    {
      value: '06',
      label: 'June',
    },
    {
      value: '07',
      label: 'July',
    },
    {
      value: '08',
      label: 'August',
    },
    {
      value: '09',
      label: 'September',
    },
    {
      value: '10',
      label: 'October',
    },
    {
      value: '11',
      label: 'November',
    },
    {
      value: '12',
      label: 'December',
    },
  ]
  dateOptions = Array.apply(null, { length: 31 } as any).map((_, index) => ({
    value: `${index + 1}`,
    label: `${index + 1}`,
  }))
  yearOptions = Array.apply(null, { length: 120 } as any).map((_, index) => ({
    value: `${2019 - index}`,
    label: `${2019 - index}`,
  }))

  render() {
    return (
      <>
        <div style={{ paddingTop: '24px' }}>
          <Form style={{ display: 'flex' }}>
            <div style={{ margin: 'auto' }}>
              <Card bordered={false}>
                <Typography>
                  <Typography.Title level={2} style={{ margin: 0 }}>
                    Create a New Account
                  </Typography.Title>
                  <Typography.Title
                    level={4}
                    style={{ margin: '10px 0', fontWeight: 400 }}
                  >
                    It's quick and easy.
                  </Typography.Title>
                </Typography>
                <Divider />
                <div style={{ display: 'flex' }}>
                  <Form.Item name='firstName' style={{ marginRight: '10px' }}>
                    <Input
                      name='firstName'
                      placeholder='First Name'
                      prefix={
                        <Icon
                          type='user'
                          style={{ color: 'rgba(0,0,0,.25)' }}
                        />
                      }
                    />
                  </Form.Item>
                  <Form.Item name='lastName'>
                    <Input
                      name='lastName'
                      type='lname'
                      placeholder='Last Name'
                      prefix={
                        <Icon
                          type='user'
                          style={{ color: 'rgba(0,0,0,.25)' }}
                        />
                      }
                    />
                  </Form.Item>
                </div>
                <Form.Item name='email'>
                  <Input
                    name='email'
                    type='email'
                    placeholder='Email'
                    prefix={
                      <Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                  />
                </Form.Item>
                <Form.Item name='password'>
                  <Input
                    name='password'
                    type='password'
                    placeholder='New password'
                    prefix={
                      <Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                  />
                </Form.Item>
                <Typography>
                  <Typography.Title level={4} style={{ margin: 0 }}>
                    Birthday
                  </Typography.Title>
                  <Typography.Paragraph>
                    To sign up, you need to be at least 18.
                  </Typography.Paragraph>
                </Typography>
                <div style={{ display: 'flex' }}>
                  <Form.Item
                    name='birthdayMonth'
                    style={{ paddingRight: '10px' }}
                  >
                    <Cascader
                      name='birthdayMonth'
                      placeholder='Month'
                      options={this.monthOptions}
                    />
                  </Form.Item>
                  <Form.Item
                    name='birthdayDay'
                    style={{ paddingRight: '10px' }}
                  >
                    <Cascader
                      name='birthdayDay'
                      placeholder='Day'
                      options={this.dateOptions}
                    />
                  </Form.Item>
                  <Form.Item name='birthdayYear'>
                    <Cascader
                      name='birthdayYear'
                      placeholder='Year'
                      options={this.yearOptions}
                    />
                  </Form.Item>
                </div>
                <Typography>
                  <Typography.Title level={4} style={{ margin: 0 }}>
                    Gender
                  </Typography.Title>
                </Typography>
                <Form.Item name='gender'>
                  <Radio.Group name='gender'>
                    <Radio name='gender' value={1}>
                      Female
                    </Radio>
                    <Radio name='gender' value={0}>
                      Male
                    </Radio>
                  </Radio.Group>
                </Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  style={{ display: 'block', width: 100 }}
                >
                  Sign up
                </Button>
                <Divider />
                Or <Link to='/login'>login now!</Link>
              </Card>
            </div>
          </Form>
        </div>
      </>
    )
  }
}

export const RegisterForm = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({
    email: '',
    password: '',
    birthdayDay: [],
    birthdayMonth: [],
    birthdayYear: [],
    firstName: '',
    gender: null,
    lastName: '',
  }),
  validateOnChange: false,
  validateOnBlur: false,
  handleSubmit: async (values, { props, setErrors }) => {
    console.log('🚀 values:', values)
    const registerValues: RegisterMutationVariables = {
      email: values.email,
      password: values.password,
    }
    const result = await props.submit(registerValues)
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
