import React, {FC} from 'react';
import './App.less'; // always import styles before js stuff
import Logo from './images/logo.png';

import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import Posts from './components/Posts';
import HomePage from './components/HomePage';
import PostDetails from './containers/posts/PostDetails';

const { Header, Footer, Content } = Layout;


const App: FC = () => { 
  // console.log(process.env.PUBLIC_URL);
  // let imgURL = process.env.PUBLIC_URL +'/images/logo.png';

  return (
    <Router>

      <div>
        <Layout className="layout">
          <Header>
            
            <img alt="example"  className="logo"  style={{ width: '32px' }} src={Logo} />
            
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['/']}>
              <Menu.Item key="/" >
                <span>Home</span>
                <NavLink to="/"  />
              </Menu.Item>
              <Menu.Item key="/posts">
                <span>Blog</span>
                <NavLink to="/posts" />
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '20px 50px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <div className="site-layout-content">
              <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/posts" component={Posts} />
                <Route path="/posts/1" component={PostDetails} />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design App &copy; 2020 Created by Arun</Footer>
        </Layout>
      </div>
    </Router>

  )
};

export default App;
