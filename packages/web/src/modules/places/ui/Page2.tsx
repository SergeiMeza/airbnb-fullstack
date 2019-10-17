import React from 'react'
import { Typography, Divider } from 'antd'
import { Form, InputNumber } from '@jbuschke/formik-antd'

export const Page2 = () => (
  <>
    <Typography>
      <Typography.Title>List your place</Typography.Title>
      <Typography.Paragraph>
        Airbnb lets you make money renting out your place
      </Typography.Paragraph>
    </Typography>
    <Divider />
    <Form.Item
      name='numBeds'
      label='Number of beds'
      labelAlign='left'
      labelCol={{ xs: { span: 24 }, sm: { span: 6 } }}
    >
      <InputNumber name='numBeds' defaultValue={4} placeholder='4' />
    </Form.Item>
    <Form.Item
      name='price'
      label='Basic price'
      labelAlign='left'
      labelCol={{ xs: { span: 24 }, sm: { span: 6 } }}
    >
      <InputNumber
        name='price'
        formatter={val => `$${val}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => (value ? value.replace(/\$\s?|(,*)/g, '') : 25)}
      />
    </Form.Item>
  </>
)
