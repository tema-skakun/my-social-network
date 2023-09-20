import './App.css';
import React, {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "@reduxjs/toolkit";
import {initialApp} from "./redux/appReducer";
import HeaderContainer from "./components/Header/HeaderContainer";//
import Navbar from './components/Navbar/Navbar';//
import ProfileContainer, {withRouter} from "./components/Profile/ProfileContainer";//
import UsersContainer from "./components/Users/UsersContainer";//
import Preloader from "./components/common/Preloader/Preloader";//
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
                            <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                            <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                            <Route path='/friends' element={<FriendsContainer/>}/>
                            <Route path='/users' element={<UsersContainer/>}/>
                            <Route path='/news' element={<News/>}/>
                            <Route path='/music' element={<Music/>}/>
                            <Route path='/settings' element={<Settings/>}/>
                            <Route path='/login' element={<Login/>}/>
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
