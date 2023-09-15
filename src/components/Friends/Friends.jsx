import style from './Friends.module.css'
import Friend from "./Friend/Friend";
import React from "react";

const Friends = ({friendsPage}) => {
    let friendsElements = friendsPage.friends.map(f =>
        <Friend name={f.name} avatarLink={f.avatarLink} key={f.id}/>);

    return (
        <div className={style.friends}>
            My friends
            {friendsElements}
        </div>

    )
}
export default Friends;
