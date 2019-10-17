import React from 'react'

import { Typography, Switch, Divider } from 'antd'
import { Form, Input } from '@jbuschke/formik-antd'

export const Page1 = (desc: boolean, setDesc: (desc: boolean) => void) => (
  <>
    <Typography>
      <Typography.Title level={3}>Overview</Typography.Title>
      <Typography.Paragraph>
        A title and summary displayed on your public listing page.
      </Typography.Paragraph>
    </Typography>
    <Form.Item name='name' label='Title' labelAlign='left'>
      <Input name='name' placeholder='Write a title' />
    </Form.Item>
    <Form.Item name='shortDescription' label='Summary' labelAlign='left'>
      <Input.TextArea
        name='shortDescription'
        placeholder='Write a summary in 250 characters or less'
        style={{ height: 200 }}
      />
    </Form.Item>
    <Divider />
    <Typography>
      <Typography.Paragraph>
        Want to write even more? You can also <b>add a detailed description</b>{' '}
        to your listing.
      </Typography.Paragraph>
    </Typography>
    <Form.Item
      name='description-switch'
      label='Add detailed description'
      labelAlign='left'
    >
      <Switch
        onChange={val => {
          setDesc(val)
        }}
      />
    </Form.Item>
    {desc ? (
      <Form.Item name='description'>
        <Input.TextArea
          name='description'
          placeholder='Describe your place...'
          style={{ height: 200 }}
        />
      </Form.Item>
    ) : null}
  </>
)
