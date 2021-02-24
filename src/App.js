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
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
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
