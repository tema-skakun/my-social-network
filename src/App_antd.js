import React from 'react';
import Preloader from "./components/common/Preloader/Preloader";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import style from "./components/Navbar/Navbar.module.css";
import {UserOutlined, MessageOutlined, SmileOutlined, TeamOutlined} from '@ant-design/icons';
import {Layout, Menu, theme} from 'antd';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const FriendsContainer = React.lazy(() => import('./components/Friends/Friend/FriendsContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));

const {
    Header,
    Content,
    Footer,
    Sider
} = Layout;

const App = () => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="demo-logo-vertical"/>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="profile" icon={<UserOutlined/>}>
                        <NavLink to='/profile' activeClassName={style.active}>Profile</NavLink>
                    </Menu.Item>
                    <Menu.Item key="messages" icon={<MessageOutlined/>}>
                        <NavLink to='/dialogs' activeClassName={style.active}>Messages</NavLink>
                    </Menu.Item>
                    <Menu.Item key="friends" icon={<SmileOutlined/>}>
                        <NavLink to='/friends' activeClassName={style.active}>Friends</NavLink>
                    </Menu.Item>
                    <Menu.Item key="users" icon={<TeamOutlined/>}>
                        <NavLink to='/users' activeClassName={style.active}>Users</NavLink>
                    </Menu.Item>
                </Menu>

            </Sider>
            <Layout>
                <Header style={{padding: 0, background: colorBgContainer,}}/>
                <Content style={{margin: '24px 16px 0',}}>
                    <div>
                        <React.Suspense fallback={<Preloader/>}>
                            <Routes>
                                <Route exact path="/" element={<Navigate to={'/profile'}/>}/>
                                <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                                <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                                <Route path='/friends' element={<FriendsContainer/>}/>
                                <Route path='/users' element={<UsersContainer/>}/>
                                <Route path='/login' element={<Login/>}/>
                                <Route path='*' element={<div>404 NOT FOUND</div>}/>
                            </Routes>
                        </React.Suspense>
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    my-social-network©2023 Created by tema-skakun
                </Footer>
            </Layout>
        </Layout>
    );
};
export default App;
