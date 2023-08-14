import style from './Dialogs.module.css'
import React from "react";
import DialogItems from './DialogItems/DialogItems';
import Messages from "./Messages/Messages";
import {Navigate} from "react-router-dom";

const Dialogs = (props) => {
    if(!props.isAuth) return <Navigate to="/login"/>;

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItems dialogs={props.dialogsPage.dialogs}/>
            </div>
            <div className={style.messages}>
                <Messages
                    state={props.dialogsPage}
                    sendMessage={props.sendMessage}
                    onMsgBodyChange={props.onMsgBodyChange}
                />
            </div>
        </div>
    )
}

export default Dialogs;
