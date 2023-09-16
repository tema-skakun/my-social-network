import style from './Dialogs.module.css'
import React from "react";
import DialogItems from './DialogItems/DialogItems';
import Messages from "./Messages/Messages";

const Dialogs = ({dialogsPage, addMessage}) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItems dialogs={dialogsPage.dialogs}/>
            </div>
            <div className={style.messages}>
                <Messages dialogsPage={dialogsPage} addMessage={addMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;
