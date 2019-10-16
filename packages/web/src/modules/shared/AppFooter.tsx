import React from 'react'
import { Layout, Divider, Typography, Menu } from 'antd'

export const AppFooter = () => {
  return (
    <Layout.Footer
      style={{ background: '#fff', height: '350px', marginTop: '50px' }}
    >
      <Divider />
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Menu
          theme='light'
          mode='vertical'
          style={{
            display: 'inline-block',
            width: '200px',
            borderRight: 'none',
          }}
        >
          <Menu.Item
            key='footer-company'
            style={{ textAlign: 'center', height: 30 }}
          >
            <Typography>
              <Typography.Title level={4} style={{ textAlign: 'center' }}>
                Company
              </Typography.Title>
            </Typography>
          </Menu.Item>
          <Menu.Item
            key='footer-company-mission'
            style={{ textAlign: 'center', height: 30 }}
          >
            mission
          </Menu.Item>
          <Menu.Item
            key='footer-company-history'
            style={{ textAlign: 'center', height: 30 }}
          >
            history
          </Menu.Item>
          <Menu.Item
            key='footer-company-information'
            style={{ textAlign: 'center', height: 30 }}
          >
            information
          </Menu.Item>
          <Menu.Item
            key='footer-company-leadership'
            style={{ textAlign: 'center', height: 30 }}
          >
            leadership
          </Menu.Item>
        </Menu>
        <Menu
          theme='light'
          mode='vertical'
          style={{
            display: 'inline-block',
            width: '200px',
            borderRight: 'none',
          }}
        >
          <Menu.Item
            key='footer-products'
            style={{ textAlign: 'center', height: 30 }}
          >
            <Typography>
              <Typography.Title
                level={4}
                style={{ textAlign: 'center', height: 30 }}
              >
                Products
              </Typography.Title>
            </Typography>
          </Menu.Item>
          <Menu.Item
            key='footer-products-appcrunch'
            style={{ textAlign: 'center', height: 30 }}
          >
            Appcrunch
          </Menu.Item>
          <Menu.Item
            key='footer-products-lollipop'
            style={{ textAlign: 'center', height: 30 }}
          >
            Lollipop
          </Menu.Item>
          <Menu.Item
            key='footer-products-the-startup'
            style={{ textAlign: 'center', height: 30 }}
          >
            The Startup
          </Menu.Item>
        </Menu>
        <Menu
          theme='light'
          mode='vertical'
          style={{
            display: 'inline-block',
            width: '200px',
            borderRight: 'none',
          }}
        >
          <Menu.Item
            key='footer-news'
            style={{ textAlign: 'center', height: 30 }}
          >
            <Typography>
              <Typography.Title
                level={4}
                style={{ textAlign: 'center', height: 30 }}
              >
                News
              </Typography.Title>
            </Typography>
          </Menu.Item>
          <Menu.Item
            key='footer-news-all'
            style={{ textAlign: 'center', height: 30 }}
          >
            All news
          </Menu.Item>
          <Menu.Item
            key='footer-news-press-release'
            style={{ textAlign: 'center', height: 30 }}
          >
            press release
          </Menu.Item>
          <Menu.Item
            key='footer-news-media'
            style={{ textAlign: 'center', height: 30 }}
          >
            media
          </Menu.Item>
          <Menu.Item
            key='footer-news-announcements'
            style={{ textAlign: 'center', height: 30 }}
          >
            announcements
          </Menu.Item>
        </Menu>
        <Menu
          theme='light'
          mode='vertical'
          style={{
            display: 'inline-block',
            width: '200px',
            borderRight: 'none',
          }}
        >
          <Menu.Item
            key='footer-contact'
            style={{ textAlign: 'center', height: 30 }}
          >
            <Typography>
              <Typography.Title
                level={4}
                style={{ textAlign: 'center', height: 30 }}
              >
                Contact Us
              </Typography.Title>
            </Typography>
          </Menu.Item>
          <Menu.Item
            key='footer-contact-pr'
            style={{ textAlign: 'center', height: 30 }}
          >
            Public Relations
          </Menu.Item>
          <Menu.Item
            key='footer-contact-ir'
            style={{ textAlign: 'center', height: 30 }}
          >
            investor Relations
          </Menu.Item>
          <Menu.Item
            key='footer-contact-appcrunch'
            style={{ textAlign: 'center', height: 30 }}
          >
            Appcrunch
          </Menu.Item>
          <Menu.Item
            key='footer-contact-lollipop'
            style={{ textAlign: 'center', height: 30 }}
          >
            Lollipop
          </Menu.Item>
          <Menu.Item
            key='footer-contact-the-startup'
            style={{ textAlign: 'center', height: 30 }}
          >
            The startup
          </Menu.Item>
        </Menu>
      </div>
    </Layout.Footer>
  )
}
