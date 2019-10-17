import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router'
import { AppHeader, CompanyFooter } from '../shared'
import {
  USERS_QUERY,
  UsersQuery,
  UsersQueryVariables,
  UsersQuery_users,
} from '@airbnb-fullstack/controller'
import { useQuery } from 'react-apollo'
import { Card, Row, Col } from 'antd'

import _ from 'lodash'
import InfiniteScroll from 'react-infinite-scroll-component'

export class UsersConnector extends React.PureComponent<
  RouteComponentProps<{}>
> {
  onUserTap = (values: { userId: number }) => {
    const { history } = this.props
    history.push(`/users/${values.userId}`)
  }

  render() {
    return (
      <React.Fragment>
        <AppHeader />
        <UsersView />
        <CompanyFooter />
      </React.Fragment>
    )
  }
}

function UsersView(props: any) {
  const [state, setState] = useState<{
    page: number
    hasMore: boolean
    pageSize: number
  }>({
    page: 1,
    hasMore: true,
    pageSize: 0,
  })
  const { data, fetchMore } = useQuery<UsersQuery, UsersQueryVariables>(
    USERS_QUERY,
    {
      variables: { page: 1, limit: state.pageSize },
    },
  )

  return (
    <>
      <InfiniteScroll
        dataLength={data ? Math.floor(data.users.length / 4) : 0}
        hasMore={state.hasMore}
        loader={<h4 style={{ textAlign: 'center' }}>Loading...</h4>}
        next={() => {
          fetchMore({
            variables: {
              page: state.page + 1,
              limit: state.pageSize,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
              if (!fetchMoreResult) {
                setState(state => ({
                  ...state,
                  hasMore: false,
                }))
                return prev
              }
              setState(state => ({
                ...state,
                page: state.page + 1,
              }))
              return Object.assign({}, prev, {
                users: [...prev.users, ...fetchMoreResult.users],
              })
            },
          })
          setState(state => ({
            ...state,
            page: state.page + 1,
          }))
        }}
        // below props only if you need pull down functionality
        refreshFunction={() => {
          console.log('pull down to refresh')
          fetchMore({
            variables: {
              page: state.page + 1,
              limit: state.pageSize,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
              if (!fetchMoreResult) {
                setState(state => ({
                  ...state,
                  hasMore: false,
                }))
                return prev
              }
              setState(state => ({
                ...state,
                page: state.page + 1,
              }))
              return Object.assign({}, prev, {
                users: [...fetchMoreResult.users],
              })
            },
          })
        }}
        pullDownToRefresh
        pullDownToRefreshContent={
          <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
        }
        releaseToRefreshContent={
          <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
        }
      >
        <div style={{ marginTop: 50, marginBottom: 50 }}>
          {data ? (
            _.chunk(data.users, 3).map((users, index) => UserRow(users, index))
          ) : (
            <></>
          )}
        </div>
      </InfiniteScroll>
    </>
  )
}

const UserRow = (users: UsersQuery_users[], index: number) => (
  <Row key={`users-row-${index}`}>
    {users.map(u => (
      <Col key={`col-user-${u.id}`} span={8}>
        {UserCard(u)}
      </Col>
    ))}
  </Row>
)

const UserCard = (user: UsersQuery_users) => (
  <div style={{ padding: 10 }}>
    <Card
      key={user.id}
      hoverable
      style={{
        minWidth: 200,
        maxWidth: 400,
        height: 375,
      }}
      cover={
        <img
          alt='user'
          src={`https://source.unsplash.com/700x${
            (Math.random() * 200 + 600).toString().split('.')[0]
          }/?${user.gender === 'F' ? 'woman' : 'man'}`}
          style={{
            objectFit: 'cover',
            height: 250,
          }}
        />
      }
      onClick={() => console.log(user)}
    >
      <Card.Meta
        title={user.first_name + ' ' + user.last_name}
        description={user.bio}
      />
    </Card>
  </div>
)
