import './App.css';
import { Layout, Menu, Row, Col, Typography } from 'antd';
import 'antd/dist/antd.css';
import {
  MailFilled,
  YoutubeFilled,
  TwitterSquareFilled,
  InstagramFilled,
  FacebookFilled,
} from '@ant-design/icons';

function App() {
  return (
    <Layout
      className="layout"
      style={{ height: '100%', border: '2px solid blue' }}
    >
      <Layout.Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key={1}>Početna</Menu.Item>
          <Menu.Item key={2}>O nama</Menu.Item>
          <Menu.Item key={3}>Prodaja</Menu.Item>
          <Menu.Item key={4}>Projekti</Menu.Item>
          <Menu.Item key={5}>Lokacija</Menu.Item>
          <Menu.Item key={6}>Kontakt</Menu.Item>
          <Menu.Item key={7}>Prijava</Menu.Item>
        </Menu>
      </Layout.Header>
      <Layout.Content style={{ height: '90%', border: '2px solid red' }}>
        <div className="site-layout-content">Content</div>
      </Layout.Content>
      <Layout.Footer style={{ textAlign: 'center' }}>
        <Row>
          <Col span={8}>
            <Typography.Title level={3}>Kontaktirajte nas</Typography.Title>
            <Typography.Title level={5}>IGP „COSIA“ d.o.o.</Typography.Title>
            <Typography.Title level={5}>Nikole Tesle bb,</Typography.Title>
            <Typography.Title level={5}>
              81400 Nikšić, Crna Gora
            </Typography.Title>
            <Typography.Title level={5}>
              +382 (0) 40 62 11 40 / 7-15h
            </Typography.Title>
            <Typography.Title level={5}>office@cosia.me</Typography.Title>
            <Typography.Title level={5}>www.cosia.me</Typography.Title>
          </Col>
        </Row>
        <Row style={{ fontSize: 'xx-large' }} gutter={24}>
          <Col span={8}>
            <MailFilled />
            <FacebookFilled />
            <InstagramFilled />
            <TwitterSquareFilled />
            <YoutubeFilled />
          </Col>
        </Row>
      </Layout.Footer>
    </Layout>
  );
}

export default App;
