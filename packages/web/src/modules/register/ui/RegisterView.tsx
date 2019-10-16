import React from 'react'
import { Layout, Row, Col } from 'antd'
import {
  RegisterResult,
  RegisterMutationVariables,
  LoginMutationVariables,
  LoginResult,
} from '@airbnb-fullstack/controller'
import { RegisterCarousel, RegisterHeader, RegisterFooter } from '../../shared'
import { RegisterForm } from './RegisterForm'

interface Props {
  registerSubmit: (values: RegisterMutationVariables) => Promise<RegisterResult>
  onRegisterFinish: () => void
  loginSubmit: (values: LoginMutationVariables) => Promise<LoginResult>
  onLoginFinish: () => void
}

export class RegisterView extends React.PureComponent<Props> {
  render() {
    return (
      <>
        <Layout>
          <RegisterHeader
            onFinish={this.props.onLoginFinish}
            submit={this.props.loginSubmit}
          />
          <Layout.Content>
            <Row>
              <Col span={1} />
              <Col span={11}>
                <RegisterCarousel />
              </Col>
              <Col span={1} />
              <Col span={10}>
                <RegisterForm
                  submit={this.props.registerSubmit}
                  onFinish={this.props.onRegisterFinish}
                />
              </Col>
              <Col span={1} />
            </Row>
          </Layout.Content>
          <RegisterFooter />
        </Layout>
      </>
    )
  }
}
