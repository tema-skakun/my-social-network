import style from './Item.module.css'
import React from "react";
import {NavLink} from "react-router-dom";

const Item = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={style.dialogsItems}>
            <img src={props.ava} alt={'avatar'}/>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

export default Item;
