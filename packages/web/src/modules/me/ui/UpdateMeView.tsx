import React from 'react'
import { Layout, Card, Typography, Row, Col, Divider } from 'antd'
import { Form, Input, Cascader, SubmitButton } from '@jbuschke/formik-antd'
import { Formik } from 'formik'
import { AppHeader } from '../../shared'
import { UpdateMeMutationVariables } from '@airbnb-fullstack/controller'

interface Props {
  onFinish: () => void
  submit: (values: UpdateMeMutationVariables) => Promise<any>
}

export class UpdateMeView extends React.PureComponent<Props> {
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
    let initialValues = {
      firstName: '',
      lastName: '',
      birthdayMonth: Array<string>(),
      birthdayDay: Array<string>(),
      birthdayYear: Array<string>(),
    }
    const _me = localStorage.getItem('me')

    if (_me) {
      try {
        const __me = JSON.parse(_me)
        if (__me) {
          initialValues.firstName = __me.firstName
          initialValues.lastName = __me.lastName
        }
      } catch (error) {
        console.log(error)
      }
    }
    return (
      <div>
        <Layout>
          <AppHeader />
          <Layout.Content>
            <Row>
              <Col span={1} />
              <Col span={22}>
                <div className='main-form'>
                  <Formik
                    initialValues={initialValues}
                    onSubmit={async values => {
                      const isValidDate =
                        values.birthdayDay.length > 0 &&
                        values.birthdayMonth.length > 0 &&
                        values.birthdayYear.length > 0

                      const birthdate = isValidDate
                        ? new Date(
                            `${values.birthdayMonth[0]}-${values.birthdayDay}-${values.birthdayYear}`,
                          )
                        : null

                      const result = await this.props.submit({
                        birthdate,
                        firstName: values.firstName,
                        lastName: values.lastName,
                      })

                      console.log('🚀 result:', result)
                      const { me, token } = result
                      if (result && me !== null && token !== null) {
                        localStorage.setItem('token', token)
                        localStorage.setItem('me', JSON.stringify(me))
                        this.props.onFinish()
                      }
                    }}
                  >
                    <Form style={{ display: 'flex' }}>
                      <div style={{ margin: 'auto' }}>
                        <Card bordered={false} style={{ width: 400 }}>
                          <Typography>
                            <Typography.Title level={2}>
                              My Profile
                            </Typography.Title>
                          </Typography>
                          <Divider />
                          <Form.Item name='firstName'>
                            <Input name='firstName' placeholder='First Name' />
                          </Form.Item>
                          <Form.Item name='lastName'>
                            <Input name='lastName' placeholder='Last Name' />
                          </Form.Item>
                          <Typography>
                            <Typography.Title level={3}>
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
                          <SubmitButton
                            type='primary'
                            style={{ display: 'block' }}
                          >
                            Update
                          </SubmitButton>
                        </Card>
                      </div>
                    </Form>
                  </Formik>
                </div>
              </Col>
              <Col span={1} />
            </Row>
          </Layout.Content>
        </Layout>
      </div>
    )
  }
}
