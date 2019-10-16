import React from 'react'
import {
  Layout,
  Card,
  Typography,
  Form,
  Icon,
  Button,
  Row,
  Col,
  Divider,
} from 'antd'
import { withFormik, FormikProps, Field, Form as FForm } from 'formik'
import { validForgotPasswordSchema } from '@airbnb-fullstack/common'
import { InputField } from '../../shared/InputField'
// import { Link } from 'react-router-dom'
import { NormalizeErrorMap } from '@airbnb-fullstack/controller'
import { AppHeader } from '../../shared/AppHeader'
import { AppFooter } from '../../shared/AppFooter'

interface FormValues {
  email: string
}

interface Props {
  submit: (values: FormValues) => Promise<NormalizeErrorMap | null>
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    return (
      <div>
        <Layout>
          <AppHeader />
          <Layout.Content>
            <Row>
              <Col span={2} />
              <Col span={20}>
                <div className='main-form'>
                  <FForm style={{ display: 'flex' }}>
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
                        <Form.Item>
                          <Button
                            type='primary'
                            htmlType='submit'
                            className='forgot-password-form-button'
                            style={{ display: 'block' }}
                          >
                            Submit
                          </Button>
                        </Form.Item>
                      </Card>
                    </div>
                  </FForm>
                </div>
              </Col>
              <Col span={2} />
            </Row>
          </Layout.Content>
          <AppFooter />
        </Layout>
      </div>
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
