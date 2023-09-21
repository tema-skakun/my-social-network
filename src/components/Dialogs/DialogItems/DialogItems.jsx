import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import style from "./DialogItems.module.css"

const DialogItems = ({dialogs}) => {
    const dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} ava={d.avatarLink} key={d.id}/> );
    return (
        <div className={style.dialogs}>
            {dialogsElements}
        </div>
    )
}

export default DialogItems;
