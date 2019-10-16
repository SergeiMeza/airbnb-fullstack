import React from 'react'
import { Layout, Button, Typography, Menu } from 'antd'
import { Link } from 'react-router-dom'

export const AppHeader = () => {
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
          <Menu
            className='main-menu'
            theme='light'
            mode='horizontal'
            style={{
              lineHeight: '64px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'flex-end',
              borderBottom: 'none',
            }}
          >
            <Menu.Item
              key='header-logo'
              style={{ alignSelf: 'start' }}
            ></Menu.Item>
            {localStorage.getItem('token') !== null ? (
              <Menu.Item key='header-sign-out'>
                <Button
                  type='danger'
                  onClick={() => {
                    localStorage.clear()
                  }}
                >
                  <Link to='/'>Sign Out</Link>
                </Button>
              </Menu.Item>
            ) : (
              <Menu.Item key='header-sign-up'>
                <Button type='default'>
                  <Link to='/'>Create New Account</Link>
                </Button>
              </Menu.Item>
            )}
          </Menu>
        </div>
      </Layout.Header>
    </>
  )
}
