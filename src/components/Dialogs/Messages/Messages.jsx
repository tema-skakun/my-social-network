import style from './Messages.module.css'
import React from "react";
import MessageItem from "./MessageItem/MessageItem";
import {addMessageAC, onMsgChangeAC} from "../../../redux/dialogsReducer";

const Messages = (props) => {
    let messagesElements = props.messages.map(m => <MessageItem message={m.message} key={m.id}/>);
    let addMessage = () => {
        props.dispatch(addMessageAC());
    }

    let onMsgChange = (e) => {
        let text = e.target.value;
        props.dispatch(onMsgChangeAC(text));
    }

    return (
        <div>
            <div className={style.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea
                    placeholder='enter your message...'
                    onChange={onMsgChange}
                    value={props.newMsgText}/>
            </div>
            <div>
                <button onClick={addMessage}>send</button>
            </div>
        </div>

    );
}

export default Messages;
