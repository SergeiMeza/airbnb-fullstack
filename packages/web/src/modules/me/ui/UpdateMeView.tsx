import React from 'react'
import { Layout, Typography, Row, Col, Divider } from 'antd'

import { AppHeader } from '../../shared'
import {
  UpdateMeMutationVariables,
  UpdateMeMediaMutationVariables,
} from '@airbnb-fullstack/controller'
import { UpdateMeForm } from './UpdateMeForm'

interface FormValues {
  firstName: string
  lastName: string
  birthdayMonth: string[]
  birthdayDay: string[]
  birthdayYear: string[]
}

interface Props {
  onFinish: () => void
  updateMeMediaSubmit: (values: UpdateMeMediaMutationVariables) => Promise<any>
  updateMeSubmit: (values: UpdateMeMutationVariables) => Promise<any>
}

export class UpdateMeView extends React.PureComponent<Props> {
  render() {
    return (
      <>
        <Layout>
          <AppHeader />
          <Layout.Content>
            <Row>
              <Col span={1} />
              <Col span={22}>
                <Typography
                  style={{ width: 400, margin: 'auto', marginTop: 50 }}
                >
                  <Typography.Title level={2} style={{ textAlign: 'center' }}>
                    My Profile
                  </Typography.Title>
                </Typography>
                <Divider />
                <UpdateMeForm
                  updateMeSubmit={this.props.updateMeSubmit}
                  updateMeMediaSubmit={this.props.updateMeMediaSubmit}
                  onFinish={this.props.onFinish}
                />
              </Col>
              <Col span={1} />
            </Row>
          </Layout.Content>
        </Layout>
      </>
    )
  }
}
