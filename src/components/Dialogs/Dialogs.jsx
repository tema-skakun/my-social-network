import style from './Dialogs.module.css'
import React from "react";
import DialogItems from './DialogItems/DialogItems';
import Messages from './Messages/Messages';

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItems dialogs={props.state.dialogs}/>
            </div>
            <div className={style.messages}>
                <Messages
                    messages={props.state.messages}
                    updateNewMsgText={props.updateNewMsgText}
                    addMessage={props.addMessage}
                    newMsgText={props.newMsgText}
                />
            </div>
        </div>
    )
}

export default Dialogs;
