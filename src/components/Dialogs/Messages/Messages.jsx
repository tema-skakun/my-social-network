import style from './Messages.module.css'
import React from "react";
import MessageItem from "./MessageItem/MessageItem";
import {AddMessageReduxForm} from "./AddMessage/AddMessage";

const Messages = (props) => {
    let messagesElements = props.state.messages.map(m => <MessageItem message={m.message} key={m.id}/>);

    let addNewMessageBody = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div>
            <div className={style.messages}>
                {messagesElements}
            </div>
            <AddMessageReduxForm onSubmit={addNewMessageBody}/>
        </div>

    );
}

export default Messages;
