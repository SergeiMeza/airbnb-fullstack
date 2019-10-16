import React from 'react'
import {
  Layout,
  Card,
  Typography,
  Form,
  Icon,
  Button,
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
import { AppHeader } from '../../shared/AppHeader'
import { RegisterFooter } from '../../shared/RegisterFooter'

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
          <AppHeader />
          <Layout.Content>
            <Row>
              <Col span={1} />
              <Col span={22}>
                <div style={{ paddingTop: '24px' }}>
                  <FForm style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <Card
                      bordered={false}
                      style={{
                        width: '400px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}
                    >
                      <Typography>
                        <Typography.Title level={4}>
                          Log Into Lollipop
                        </Typography.Title>
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
                        <Button
                          type='primary'
                          htmlType='submit'
                          style={{ display: 'block', width: '100px' }}
                        >
                          Login
                        </Button>
                        <Link to='/forgot-password'>Forgot password?</Link>
                        <span>{' ・ '}</span>
                        <Link to='/register'>Sign up for Lollipop</Link>
                      </Form.Item>
                    </Card>
                  </FForm>
                </div>
              </Col>
              <Col span={1} />
            </Row>
          </Layout.Content>
          <RegisterFooter />
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
