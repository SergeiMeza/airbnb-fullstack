import React from 'react'
import { Layout, Row, Col } from 'antd'

import { AppHeader } from '../../shared'
import { CreatePlaceForm } from './CreatePlaceForm'

interface Props {
  // onFinish: () => void
  // updateMeMediaSubmit: (values: UpdateMeMediaMutationVariables) => Promise<any>
  // updateMeSubmit: (values: UpdateMeMutationVariables) => Promise<any>
}

export class CreatePlaceView extends React.PureComponent<Props> {
  render() {
    return (
      <>
        <Layout>
          <AppHeader />
          <Layout.Content>
            <Row>
              <Col span={1} />
              <Col span={22}>
                <div
                  style={{
                    marginTop: 50,
                    marginBottom: 50,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                >
                  <CreatePlaceForm />
                </div>
              </Col>
              <Col span={1} />
            </Row>
          </Layout.Content>
        </Layout>
      </>
    )
  }
}
