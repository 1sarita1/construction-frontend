import './App.css';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';

function App() {
  return (
    <Layout
      className="layout"
      style={{ height: '100%', border: '2px solid blue' }}
    >
      <Layout.Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">Početna</Menu.Item>
          <Menu.Item key="2">O nama</Menu.Item>
          <Menu.Item key="3">Prodaja</Menu.Item>
          <Menu.Item key="4">Projekti</Menu.Item>
          <Menu.Item key="5">Lokacija</Menu.Item>
          <Menu.Item key="6">Kontakt</Menu.Item>
          <Menu.Item key="7">Prijava</Menu.Item>{' '}
        </Menu>
      </Layout.Header>
      <Layout.Content style={{ height: '90%', border: '2px solid red' }}>
        <div className="site-layout-content">Content</div>
      </Layout.Content>
      <Layout.Footer style={{ textAlign: 'center' }}>
        Created by Sara and Ana
      </Layout.Footer>
    </Layout>
  );
}

export default App;
