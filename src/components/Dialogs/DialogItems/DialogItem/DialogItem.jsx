import style from './DialogItem.module.css'
import React from "react";
import {NavLink} from "react-router-dom";
import {AVATAR_ALT, DIALOGS_PATH} from "../../../../data/constants";

const DialogItem = ({ava, name, id}) => {
    const path = DIALOGS_PATH + '/' + id;
    return (
        <div className={style.dialogsItems}>
            <img src={ava} alt={AVATAR_ALT}/>
            <NavLink to={path}> {name} </NavLink>
        </div>
    )
}

export default DialogItem;
