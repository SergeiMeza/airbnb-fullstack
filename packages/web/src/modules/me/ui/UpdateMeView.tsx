import React from 'react'
import {
  Layout,
  Card,
  Form,
  Button,
  Typography,
  Menu,
  Row,
  Col,
  Divider,
} from 'antd'
import { withFormik, FormikProps, Field, Form as FForm } from 'formik'
// import { validUserSchema } from '@airbnb-fullstack/common'
import { InputField } from '../../shared/InputField'
// import { Link } from 'react-router-dom'
// import { RegisterResult } from '@airbnb-fullstack/controller'

export interface FormValues {
  firstName: string
  lastName: string
  birthMonth: string
  birthDay: string
  birthYear: string
}

interface Props {
  onFinish: () => void
  // submit: (values: FormValues) => Promise<RegisterResult>
  submit: (values: FormValues) => Promise<any>
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
              <Col span={22}>
                <div className='main-form'>
                  <FForm style={{ display: 'flex' }}>
                    <div style={{ margin: 'auto' }}>
                      <Card bordered={false}>
                        <Typography>
                          <Typography.Title level={2}>
                            My Profile
                          </Typography.Title>
                        </Typography>
                        <Divider />
                        <Field
                          name='firstname'
                          placeholder='First Name'
                          component={InputField}
                        />
                        <Field
                          name='lastname'
                          placeholder='Last Name'
                          component={InputField}
                        />
                        <Typography>
                          <Typography.Title level={3}>
                            Birthday
                          </Typography.Title>
                          <Typography.Paragraph>
                            To sign up, you need to be at least 18.
                          </Typography.Paragraph>
                        </Typography>
                        <Field
                          name='birthdaymonth'
                          placeholder='Month'
                          component={InputField}
                        />
                        <Field
                          name='birthdayday'
                          placeholder='Day'
                          component={InputField}
                        />
                        <Field
                          name='birthdayyear'
                          placeholder='Year'
                          component={InputField}
                        />
                        <Form.Item>
                          <Button
                            type='primary'
                            htmlType='submit'
                            style={{ display: 'block' }}
                          >
                            Begin!
                          </Button>
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

export const UpdateMeView = withFormik<Props, FormValues>({
  // validationSchema: validUserSchema,
  mapPropsToValues: () => ({
    firstName: '',
    lastName: '',
    birthMonth: '',
    birthDay: '',
    birthYear: '',
  }),
  validateOnChange: false,
  validateOnBlur: false,
  handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
    // const result = await props.submit(values)
    // const { me, token } = result
    // if (me !== null && token !== null) {
    //   localStorage.setItem('token', token)
    //   props.onFinish()
    // }
    // if (result.errors) {
    //   setErrors(result.errors)
    // }
  },
})(C)
