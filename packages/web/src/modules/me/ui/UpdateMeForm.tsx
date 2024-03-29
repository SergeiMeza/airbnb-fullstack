import React from 'react'
import { withFormik, FormikProps, Field } from 'formik'
import { Typography, Button, Card } from 'antd'
import { Form, Input, Cascader } from '@jbuschke/formik-antd'

import {
  UpdateMeMutationVariables,
  UpdateMeMediaMutationVariables,
} from '@airbnb-fullstack/controller'
import { UploadField } from '../../shared/DropZoneField'

interface FormValues {
  media: any
  firstName: string
  lastName: string
  birthdayMonth: string[]
  birthdayDay: string[]
  birthdayYear: string[]
}

interface Props {
  onFinish: () => void
  updateMeSubmit: (values: UpdateMeMutationVariables) => Promise<any>
  updateMeMediaSubmit: (values: UpdateMeMediaMutationVariables) => Promise<any>
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
    // let initialValues = {
    //   firstName: '',
    //   lastName: '',
    //   birthdayMonth: Array<string>(),
    //   birthdayDay: Array<string>(),
    //   birthdayYear: Array<string>(),
    // }
    // const _me = localStorage.getItem('me')

    // if (_me) {
    //   try {
    //     const __me = JSON.parse(_me)
    //     if (__me) {
    //       initialValues.firstName = __me.firstName
    //       initialValues.lastName = __me.lastName
    //     }
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    return (
      <>
        <Form
          style={{
            display: 'flex',
            paddingBottom: '50px',
          }}
        >
          <div style={{ margin: 'auto' }}>
            <Card bordered={false} style={{ width: 400 }}>
              <Field name='media' component={UploadField} />
              <Form.Item name='firstName'>
                <Input name='firstName' placeholder='First Name' />
              </Form.Item>
              <Form.Item name='lastName'>
                <Input name='lastName' placeholder='Last Name' />
              </Form.Item>
              <Typography>
                <Typography.Title level={3}>Birthday</Typography.Title>
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
                <Form.Item name='birthdayDay' style={{ paddingRight: '10px' }}>
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
              <Form.Item name='submit-button'>
                <Button
                  type='primary'
                  htmlType='submit'
                  style={{ display: 'block', width: '100px' }}
                >
                  Update
                </Button>
              </Form.Item>
            </Card>
          </div>
        </Form>
      </>
    )
  }
}

export const UpdateMeForm = withFormik<Props, FormValues>({
  // validationSchema: validUserSchema,
  mapPropsToValues: () => ({
    media: null,
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    birthdayDay: [],
    birthdayMonth: [],
    birthdayYear: [],
  }),
  validateOnChange: false,
  validateOnBlur: false,
  handleSubmit: async (values, { props, setErrors }) => {
    console.log('🚀 values:', values)

    const isValidDate =
      values.birthdayDay.length > 0 &&
      values.birthdayMonth.length > 0 &&
      values.birthdayYear.length > 0

    const birthdate = isValidDate
      ? new Date(
          `${values.birthdayMonth[0]}-${values.birthdayDay}-${values.birthdayYear}`,
        )
      : null
    const result = await props.updateMeSubmit({
      birthdate,
      firstName: values.firstName,
      lastName: values.lastName,
    })

    console.log('🚀 result:', result)
    const { me, token } = result

    if (result && me !== null && token !== null) {
      localStorage.setItem('token', token)
      localStorage.setItem('me', JSON.stringify(me))
    }

    if (result.errors) {
      setErrors(result.errors)
    }

    if (values.media) {
      await props.updateMeMediaSubmit({
        file: values.media.originFileObj,
      })
      props.onFinish()
    } else {
      props.onFinish()
    }
  },
})(C)
