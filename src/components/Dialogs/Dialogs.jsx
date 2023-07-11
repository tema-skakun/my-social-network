import style from './Dialogs.module.css'
import React from "react";
import DialogItems from './DialogItems/DialogItems';
import MessagesContainer from "./Messages/MessagesContainer";

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItems dialogs={props.state.dialogs}/>
            </div>
            <div className={style.messages}>
                <MessagesContainer
                    state={props.state}
                    dispatch={props.dispatch}
                />
            </div>
        </div>
    )
}

export default Dialogs;
