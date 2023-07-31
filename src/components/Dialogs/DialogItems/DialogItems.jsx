import React from "react";
import Item from "./Item/Item";
import style from "./DialogItems.module.css"

const DialogItems = (props) => {
    let dialogsElements = props.dialogs.map( d => <Item name={d.name} id={d.id} ava={d.avatarLink} key={d.id}/> );
    return (
        <div className={style.dialogs}>
            {dialogsElements}
        </div>
    )
}

export default DialogItems;
