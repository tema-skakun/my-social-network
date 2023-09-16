import style from './Item.module.css'
import React from "react";
import {NavLink} from "react-router-dom";

const Item = ({ava, name, id}) => {
    let path = "/dialogs/" + id;
    return (
        <div className={style.dialogsItems}>
            <img src={ava} alt={'avatar'}/>
            <NavLink to={path}> {name} </NavLink>
        </div>
    )
}

export default Item;
