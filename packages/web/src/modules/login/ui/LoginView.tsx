import React from 'react'
import {
  Layout,
  Card,
  Typography,
  Form,
  Icon,
  Button,
  Menu,
  Carousel,
  Row,
  Col,
  Divider,
} from 'antd'
import { withFormik, FormikProps, Field, Form as FForm } from 'formik'
import { validUserSchema } from '@airbnb-fullstack/common'
import { InputField } from '../../shared/InputField'
import { Link } from 'react-router-dom'
import { LoginResult } from '@airbnb-fullstack/controller'

interface FormValues {
  email: string
  password: string
}

interface Props {
  onFinish: () => void
  submit: (values: FormValues) => Promise<LoginResult>
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    return (
      <div>
        <Layout>
          <Layout.Header>
            <Menu
              theme='light'
              mode='horizontal'
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key='1'>nav 1</Menu.Item>
              <Menu.Item key='2'>nav 2</Menu.Item>
              <Menu.Item key='3'>nav 3</Menu.Item>
            </Menu>
          </Layout.Header>
          <Layout.Content>
            <Row>
              <Col span={1} />
              <Col span={11}>
                <div className='main-carousel'>
                  <Carousel autoplay>
                    <div>
                      <h3>1</h3>
                    </div>
                    <div>
                      <h3>2</h3>
                    </div>
                    <div>
                      <h3>3</h3>
                    </div>
                    <div>
                      <h3>4</h3>
                    </div>
                  </Carousel>
                </div>
              </Col>
              <Col span={1} />
              <Col span={10}>
                <div className='main-form'>
                  <FForm style={{ display: 'flex' }}>
                    <div style={{ margin: 'auto' }}>
                      <Card bordered={false}>
                        <Typography>
                          <Typography.Title level={2}>Login</Typography.Title>
                        </Typography>
                        <Divider />
                        <Field
                          name='email'
                          prefix={
                            <Icon
                              type='user'
                              style={{ color: 'rgba(0,0,0,.25)' }}
                            />
                          }
                          placeholder='Email'
                          component={InputField}
                        />
                        <Field
                          name='password'
                          type='password'
                          prefix={
                            <Icon
                              type='lock'
                              style={{ color: 'rgba(0,0,0,.25)' }}
                            />
                          }
                          placeholder='Password'
                          component={InputField}
                        />
                        <Form.Item>
                          <Link to='/forgot-password'>Forgot password?</Link>
                          <Button
                            type='primary'
                            htmlType='submit'
                            className='login-form-button'
                            style={{ display: 'block' }}
                          >
                            Login
                          </Button>
                          Or <Link to='/register'>register now!</Link>
                        </Form.Item>
                      </Card>
                    </div>
                  </FForm>
                </div>
              </Col>
              <Col span={1} />
            </Row>
          </Layout.Content>
          <div className='main-footer'>
            <Layout.Footer>
              <Divider />
            </Layout.Footer>
          </div>
        </Layout>
      </div>
    )
  }
}

export const LoginView = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({ email: '', password: '' }),
  validateOnChange: false,
  validateOnBlur: false,
  handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
    const result = await props.submit(values)
    const { me, token } = result

    if (me !== null && token !== null) {
      localStorage.setItem('token', token)
      props.onFinish()
    }
    if (result.errors) {
      setErrors(result.errors)
    }
  },
})(C)
