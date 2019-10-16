import React from 'react'
import { Layout, Divider, Typography, Menu } from 'antd'
import { Link } from 'react-router-dom'

export const RegisterFooter = () => {
  return (
    <Layout.Footer
      style={{
        background: '#fff',
        height: '200px',
        paddingTop: 0,
      }}
    >
      <Divider style={{ marginBottom: '12px' }} />
      <Menu
        mode='horizontal'
        style={{ borderBottom: 'none', marginBottom: '24px' }}
      >
        <Menu.Item>
          <Link to='/register'>Sign Up</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/login'>Log In</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/about'>About</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/ad-campaign/landing'>Create Ad</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/privacy'>Privacy</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/policies/cookies'>Cookies</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/policies'>Terms</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/help'>Help</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/careers'>Careers</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/developers'>Developers</Link>
        </Menu.Item>
      </Menu>
      <Typography>
        <Typography.Text>Lollipop © 2019</Typography.Text>
      </Typography>
    </Layout.Footer>
  )
}
