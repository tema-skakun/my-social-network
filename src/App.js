import './App.css';
import React, {Component} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "@reduxjs/toolkit";
import {initialApp} from "./redux/appReducer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from './components/Navbar/Navbar';
import ProfileContainer, {withRouter} from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Preloader from "./components/common/Preloader/Preloader";
import {
    DIALOGS_PATH,
    FRIENDS_PATH,
    LOGIN_PATH,
    MUSIC_PATH,
    NEWS_PATH, NOT_FOUND_MESSAGE,
    PROFILE_PATH,
    SETTINGS_PATH,
    USERS_PATH
} from "./data/constants";
const DialogsContainer = React.lazy( () => import('./components/Dialogs/DialogsContainer'));
const FriendsContainer = React.lazy( () => import('./components/Friends/Friend/FriendsContainer'));
const Login = React.lazy( () => import('./components/Login/Login'));
const News = React.lazy( () => import('./components/News/News'));
const Settings = React.lazy( () => import('./components/Settings/Settings'));
const Music = React.lazy( () => import('./components/Music/Music'));

class App extends Component {
    componentDidMount() {
        this.props.initialApp();
    }
    render() {
        if (!this.props.initialized)
            return <Preloader/>

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <React.Suspense fallback={<Preloader/>}>
                        <Routes>
                            <Route exact path="/" element={<Navigate to={PROFILE_PATH} /> } />
                            <Route path={PROFILE_PATH + '/:userId?'} element={<ProfileContainer/>}/>
                            <Route path={DIALOGS_PATH + '/*'} element={<DialogsContainer/>}/>
                            <Route path={FRIENDS_PATH} element={<FriendsContainer/>}/>
                            <Route path={USERS_PATH} element={<UsersContainer/>}/>
                            <Route path={NEWS_PATH} element={<News/>}/>
                            <Route path={MUSIC_PATH} element={<Music/>}/>
                            <Route path={SETTINGS_PATH} element={<Settings/>}/>
                            <Route path={LOGIN_PATH} element={<Login/>}/>
                            <Route path='*' element={<div>{NOT_FOUND_MESSAGE}</div>}/>
                        </Routes>
                    </React.Suspense>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return (
        {
            initialized: state.app.initialized,
        }
    )
}
export default compose(
    withRouter,
    connect(mapStateToProps, {initialApp}))(App);
