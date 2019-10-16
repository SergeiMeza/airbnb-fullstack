import React from 'react'
import { Layout, Empty } from 'antd'
import { AppHeader } from '.'

export const EmptyView = () => {
  return (
    <>
      <Layout>
        <AppHeader />
        <Layout.Content>
          <Empty description='Coming Soon...' style={{ marginTop: '300px' }} />
        </Layout.Content>
      </Layout>
    </>
  )
}
