import style from './DialogItem.module.css'
import React from "react";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={style.dialogsItems}>
            <img src={props.ava}/>
            <NavLink className={style.dialogsItems} to={path}> {props.name} </NavLink>
        </div>
    )
}

export default DialogItem;
