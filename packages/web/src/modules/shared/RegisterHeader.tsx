import React from 'react'
import { Layout, Typography, Icon } from 'antd'
import { Formik } from 'formik'
import { Form, Input, SubmitButton } from '@jbuschke/formik-antd'

export const RegisterHeader = (props: any) => {
  return (
    <>
      <Layout.Header style={{ background: '#fff' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: '1px solid #e8e8e8',
          }}
        >
          <Typography
            style={{
              display: 'inline-block',
            }}
          >
            <Typography.Title
              level={4}
              style={{
                margin: 'auto 0',
                display: 'inline-block',
              }}
            >
              Lollipop
            </Typography.Title>
          </Typography>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={async values => {}}
          >
            <Form
              style={{
                display: 'flex',
                marginTop: 'auto',
                marginBottom: 'auto',
              }}
            >
              <Form.Item
                name='email'
                style={{ marginBottom: 0, marginRight: 10 }}
              >
                <Input
                  name='email'
                  placeholder='Email'
                  prefix={
                    <Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                />
              </Form.Item>
              <Form.Item
                name='password'
                style={{ marginBottom: 0, marginRight: 10 }}
              >
                <Input
                  name='password'
                  placeholder='Password'
                  prefix={
                    <Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                />
              </Form.Item>
              <SubmitButton
                type='primary'
                style={{ marginTop: 'auto', marginBottom: 'auto', width: 100 }}
              >
                Log In
              </SubmitButton>
            </Form>
          </Formik>
        </div>
      </Layout.Header>
    </>
  )
}
