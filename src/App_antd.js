import React from 'react';
import Preloader from "./components/common/Preloader/Preloader";
import {Navigate, Route, Routes} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {Layout, theme} from 'antd';
import Navbar from "./components/Navbar/Navbar";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const FriendsContainer = React.lazy(() => import('./components/Friends/Friend/FriendsContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));
const {
    Header,
    Content,
    Footer,
} = Layout;

const App = () => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    return (
        <Layout>
            <Navbar/>
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
