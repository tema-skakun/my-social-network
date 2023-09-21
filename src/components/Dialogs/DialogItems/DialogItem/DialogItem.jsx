import style from './DialogItem.module.css'
import React from "react";
import {NavLink} from "react-router-dom";

const DialogItem = ({ava, name, id}) => {
    const path = "/dialogs/" + id;
    return (
        <div className={style.dialogsItems}>
            <img src={ava} alt={'avatar'}/>
            <NavLink to={path}> {name} </NavLink>
        </div>
    )
}

export default DialogItem;
