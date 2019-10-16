import React from 'react'
import { Layout, Card, Icon, Typography, Row, Col, Divider } from 'antd'
import {
  Form,
  Input,
  Cascader,
  SubmitButton,
  Radio,
} from '@jbuschke/formik-antd'
import { withFormik, FormikProps } from 'formik'
import { validUserSchema } from '@airbnb-fullstack/common'
import { Link } from 'react-router-dom'
import {
  RegisterResult,
  RegisterMutationVariables,
  LoginMutationVariables,
  LoginResult,
} from '@airbnb-fullstack/controller'
import { RegisterCarousel } from '../../shared/RegisterCarousel'
import { RegisterHeader } from '../../shared/RegisterHeader'
import { RegisterFooter } from '../../shared/RegisterFooter'

interface FormValues {
  email: string
  password: string
}

interface Props {
  onFinish: () => void
  registerSubmit: (values: RegisterMutationVariables) => Promise<RegisterResult>
  loginSubmit: (values: LoginMutationVariables) => Promise<LoginResult>
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
        <Layout>
          <RegisterHeader {...this.props} />
          <Layout.Content>
            <Row>
              <Col span={1} />
              <Col span={11}>
                <RegisterCarousel />
              </Col>
              <Col span={1} />
              <Col span={10}>
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
                          <Form.Item
                            name='firstName'
                            style={{ marginRight: '10px' }}
                          >
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
                            placeholder='Email'
                            prefix={
                              <Icon
                                type='mail'
                                style={{ color: 'rgba(0,0,0,.25)' }}
                              />
                            }
                          />
                        </Form.Item>
                        <Form.Item name='password'>
                          <Input
                            name='password'
                            placeholder='New password'
                            prefix={
                              <Icon
                                type='lock'
                                style={{ color: 'rgba(0,0,0,.25)' }}
                              />
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
                        <Radio.Group
                          name='gender'
                          style={{ marginBottom: '24px' }}
                        >
                          <Radio name='gender' value={1}>
                            Female
                          </Radio>
                          <Radio name='gender' value={0}>
                            Male
                          </Radio>
                        </Radio.Group>
                        <SubmitButton
                          type='primary'
                          style={{ display: 'block', width: 100 }}
                        >
                          Sign up
                        </SubmitButton>
                        <Divider />
                        Or <Link to='/login'>login now!</Link>
                      </Card>
                    </div>
                  </Form>
                </div>
              </Col>
              <Col span={1} />
            </Row>
          </Layout.Content>
          <RegisterFooter />
        </Layout>
      </>
    )
  }
}

export const RegisterView = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({ email: '', password: '' }),
  validateOnChange: false,
  validateOnBlur: false,
  handleSubmit: async (values, { props, setErrors }) => {
    console.log('🚀 values:', values)
    const registerValues: RegisterMutationVariables = {
      email: values.email,
      password: values.password,
    }
    const result = await props.registerSubmit(registerValues)
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
