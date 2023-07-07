import React from "react";
import Item from "./Item/Item";

const DialogItems = (props) => {
    let dialogsElements = props.dialogs.map( d => <Item name={d.name} id={d.id} ava={d.avatarLink} key={d.id}/> );
    return (
        <div>
            {dialogsElements}
        </div>
    )
}

export default DialogItems;
