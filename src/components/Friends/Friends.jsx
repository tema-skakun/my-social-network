import style from './Friends.module.css'
import Friend from "./Friend/Friend";
import {Navigate} from "react-router-dom";
import React from "react";

const Friends = (props) => {
    if(!props.isAuth) return <Navigate to="/login"/>;

    let friendsElements = props.sidebarPage.friends.map(f => <Friend name={f.name} avatarLink={f.avatarLink} key={f.id}/>);

    return (
        <div className={style.friends}>
            My friends
            {friendsElements}
        </div>

    )
}
export default Friends;
