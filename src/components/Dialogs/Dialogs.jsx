import style from './Dialogs.module.css'
import React from "react";
import DialogItems from './DialogItems/DialogItems';
import Messages from "./Messages/Messages";

const Dialogs = ({dialogsPage, sendMessage}) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItems dialogs={dialogsPage.dialogs}/>
            </div>
            <div className={style.messages}>
                <Messages dialogsPage={dialogsPage} sendMessage={sendMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;
