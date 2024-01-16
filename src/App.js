import React, {useEffect} from 'react';
import Preloader from "./components/common/Preloader/Preloader.tsx";
import {Navigate, Route, Routes} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer.tsx";
import UsersContainer from "./components/Users/UsersContainer.tsx";
import {Layout} from 'antd';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import {compose} from "@reduxjs/toolkit";
import {connect} from "react-redux";
import {initialApp} from "./redux/appReducer.ts";
import {
    AUTHOR,
    DIALOGS_PATH,
    FRIENDS_PATH,
    LOGIN_PATH,
    NOT_FOUND_MESSAGE,
    PROFILE_PATH,
    PROJECT_NAME,
    USERS_PATH
} from "./data/constants.ts";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const FriendsContainer = React.lazy(() => import('./components/Friends/Friend/FriendsContainer'));
const Login = React.lazy(() => import('./components/Login/Login.tsx'));
const {
    Content,
    Footer,
} = Layout;

const App = ({initialized, initialApp}) => {

    useEffect(() => {
        initialApp();
    }, [initialApp]);

    if (!initialized) {
        return <Preloader/>;
    }

    return (
        <Layout>
            <Navbar/>
            <Layout>
                <Header/>
                <Content style={{margin: '24px 16px 0',}}>
                    <div>
                        <React.Suspense fallback={<Preloader/>}>
                            <Routes>
                                <Route exact path="/" element={<Navigate to={PROFILE_PATH}/>}/>
                                <Route path={PROFILE_PATH + '/:userId?'} element={<ProfileContainer/>}/>
                                <Route path={USERS_PATH} element={<UsersContainer mainTitle={'SamuraiTS'}/>}/>
                                <Route path={FRIENDS_PATH} element={<FriendsContainer/>}/>
                                <Route path={DIALOGS_PATH + '/*'} element={<DialogsContainer/>}/>
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

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});

export default compose(connect(mapStateToProps, {initialApp}))(App);
