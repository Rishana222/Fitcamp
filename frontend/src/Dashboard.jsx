import React, { useState } from 'react';
import location from '../src/assets/icons8-location-16 (1).png'
import facility from '../src/assets/icons8-treadmill-16 (1).png'
import subscription from './assets/icons8-subscription-16.png'
import gym from './assets/icons8-gym-16 (2).png'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
 WalletOutlined ,
  EnvironmentOutlined,
  ToolOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical h-40" />

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <img src={location}/>,
              label: <Link to="gym-location">Gym Location</Link>,
            },
            {
              key: '2',
              icon:  <img src={facility}/>,
              label: <Link to="facilities">Facilities</Link>,
            },
            {
              key: '3',
              icon: <img src={subscription}/>,
              label: <Link to="subscription">Subscriptions</Link>,
            },
             {
              key: '4',
              icon: <img src={gym}/>,
              label: <Link to="gym">Gym</Link>,
            }
          ]}
        />
      </Sider>

      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>

        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;

