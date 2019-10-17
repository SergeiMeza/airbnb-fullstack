import React from 'react'
import { withFormik, FormikProps } from 'formik'
import { Button } from 'antd'
import { Form } from '@jbuschke/formik-antd'

import { Page1 } from './Page1'
import { Page2 } from './Page2'

const pages: any[] = [Page2, Page1]

interface FormValues {
  name: string
  shortDescription: string
  description: string
  numBeds: number
  price: number
  tags: string[]
}

interface Props {
  // onFinish: () => void
  // updateMeSubmit: (values: UpdateMeMutationVariables) => Promise<any>
  // updateMeMediaSubmit: (values: UpdateMeMediaMutationVariables) => Promise<any>
}

interface State {
  isUsingDescription: boolean
  page: number
}

class C extends React.PureComponent<FormikProps<FormValues> & Props, State> {
  state = {
    isUsingDescription: false,
    page: 0,
  }

  previousPage = () =>
    this.setState(state => ({
      page: Math.max(state.page - 1, 0),
      isUsingDescription: state.isUsingDescription,
    }))

  nextPage = () =>
    this.setState(state => ({
      page: state.page + 1,
      isUsingDescription: state.isUsingDescription,
    }))

  render() {
    return (
      <>
        <Form
          style={{
            display: 'flex',
            paddingBottom: '50px',
          }}
          labelCol={{ xs: { span: 24 }, sm: { span: 8 } }}
        >
          <div style={{ margin: 'auto', width: 500 }}>
            {this.state.page === 0
              ? pages[0]()
              : this.state.page === 1
              ? pages[1](this.state.isUsingDescription, val =>
                  this.setState(state => ({
                    ...state,
                    isUsingDescription: val,
                  })),
                )
              : null}

            {this.state.page > 0 ? (
              <Form.Item name='next-page-button'>
                <Button
                  type='primary'
                  ghost
                  style={{ display: 'block' }}
                  onClick={() => {
                    this.previousPage()
                  }}
                >
                  Previous Page
                </Button>
              </Form.Item>
            ) : null}

            {this.state.page === pages.length - 1 ? (
              <Form.Item name='submit-button'>
                <Button
                  type='primary'
                  htmlType='submit'
                  style={{ display: 'block' }}
                >
                  Submit
                </Button>
              </Form.Item>
            ) : (
              <Form.Item name='next-page-button'>
                <Button
                  type='primary'
                  style={{ display: 'block' }}
                  onClick={() => {
                    this.nextPage()
                  }}
                >
                  Next Page
                </Button>
              </Form.Item>
            )}
          </div>
        </Form>
      </>
    )
  }
}

export const CreatePlaceForm = withFormik<Props, FormValues>({
  // validationSchema: validUserSchema,
  mapPropsToValues: () => ({
    name: '',
    shortDescription: '',
    description: '',
    numBeds: 4,
    price: 25,
    tags: [],
  }),
  validateOnChange: false,
  validateOnBlur: false,
  handleSubmit: async (values, { props, setErrors }) => {
    console.log('🚀 values:', values)
    // const isValidDate =
    //   values.birthdayDay.length > 0 &&
    //   values.birthdayMonth.length > 0 &&
    //   values.birthdayYear.length > 0
    // const birthdate = isValidDate
    //   ? new Date(
    //       `${values.birthdayMonth[0]}-${values.birthdayDay}-${values.birthdayYear}`,
    //     )
    //   : null
    // const result = await props.updateMeSubmit({
    //   birthdate,
    //   placeName: values.placeName,
    //   shortDescription: values.shortDescription,
    // })
    // console.log('🚀 result:', result)
    // const { me, token } = result
    // if (result && me !== null && token !== null) {
    //   localStorage.setItem('token', token)
    //   localStorage.setItem('me', JSON.stringify(me))
    // }
    // if (result.errors) {
    //   setErrors(result.errors)
    // }
    // if (values.media) {
    //   await props.updateMeMediaSubmit({
    //     file: values.media.originFileObj,
    //   })
    //   props.onFinish()
    // } else {
    //   props.onFinish()
    // }
  },
})(C)
