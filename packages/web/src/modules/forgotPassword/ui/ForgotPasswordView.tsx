import React from 'react'
import { Layout, Card, Typography, Icon, Button, Row, Col, Divider } from 'antd'
import { withFormik, FormikProps } from 'formik'
import { Form, Input } from '@jbuschke/formik-antd'
import { validForgotPasswordSchema } from '@airbnb-fullstack/common'
import { NormalizeErrorMap } from '@airbnb-fullstack/controller'
import { AppHeader, RegisterFooter } from '../../shared'

interface FormValues {
  email: string
}

interface Props {
  submit: (values: FormValues) => Promise<NormalizeErrorMap | null>
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    return (
      <>
        <Layout>
          <AppHeader />
          <Layout.Content>
            <Row>
              <Col span={2} />
              <Col span={20}>
                <div style={{ paddingTop: 100, paddingBottom: 50 }}>
                  <Form style={{ display: 'flex' }}>
                    <div style={{ margin: 'auto' }}>
                      <Card bordered={false}>
                        <Typography>
                          <Typography.Title level={2}>
                            Forgot Password?
                          </Typography.Title>
                          <Typography.Paragraph>
                            Enter your email address to reset your password.
                            <br /> You may need to check your spam folder or
                            unblock no-reply@lpp.pw.
                          </Typography.Paragraph>
                        </Typography>
                        <Divider />
                        <Form.Item name='email'>
                          <Input
                            name='email'
                            type='email'
                            placeholder='Email'
                            prefix={
                              <Icon
                                type='mail'
                                style={{ color: 'rgba(0,0,0,.25)' }}
                              />
                            }
                          />
                        </Form.Item>
                        <Button
                          type='primary'
                          htmlType='submit'
                          style={{ display: 'block' }}
                        >
                          Submit
                        </Button>
                      </Card>
                    </div>
                  </Form>
                </div>
              </Col>
              <Col span={2} />
            </Row>
          </Layout.Content>
          <RegisterFooter />
        </Layout>
      </>
    )
  }
}

export const ForgotPasswordView = withFormik<Props, FormValues>({
  validationSchema: validForgotPasswordSchema,
  mapPropsToValues: () => ({ email: '' }),
  validateOnChange: false,
  validateOnBlur: false,
  handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
    const errors = await props.submit(values)
    if (errors) {
      setErrors(errors)
    }
  },
})(C)
