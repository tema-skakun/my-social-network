import style from './Friends.module.css'
import Friend from "./Friend/Friend";
import React from "react";

const Friends = ({friendsPage}) => {
    const friendsElements = friendsPage.friends.map(f =>
        <Friend name={f.name} avatarLink={f.photos} key={f.id}/>
    );

    return (
        <div className={style.main}>
            <div className={style.friends}>
                <h3>
                    My friends
                </h3>
                {friendsElements}
            </div>
        </div>

    )
}
export default Friends;
