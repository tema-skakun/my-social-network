import React from 'react';
import Preloader from "./components/common/Preloader/Preloader";
import {Navigate, Route, Routes} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {Layout, theme} from 'antd';
import Navbar from "./components/Navbar/Navbar";
import {
    AUTHOR,
    DIALOGS_PATH,
    FRIENDS_PATH,
    LOGIN_PATH,
    NOT_FOUND_MESSAGE,
    PROFILE_PATH,
    PROJECT_NAME,
    USERS_PATH
} from "./data/constants";

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
                                <Route exact path="/" element={<Navigate to={PROFILE_PATH} /> } />
                                <Route path={PROFILE_PATH + '/:userId?'} element={<ProfileContainer/>}/>
                                <Route path={DIALOGS_PATH + '/*'} element={<DialogsContainer/>}/>
                                <Route path={FRIENDS_PATH} element={<FriendsContainer/>}/>
                                <Route path={USERS_PATH} element={<UsersContainer/>}/>
                                <Route path={LOGIN_PATH} element={<Login/>}/>
                                <Route path='*' element={<div>{NOT_FOUND_MESSAGE}</div>}/>
                            </Routes>
                        </React.Suspense>
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    {PROJECT_NAME}©2023 Created by {AUTHOR}
                </Footer>
            </Layout>
        </Layout>
    );
};
export default App;
