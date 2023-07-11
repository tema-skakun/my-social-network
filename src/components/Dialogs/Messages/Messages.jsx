import style from './Messages.module.css'
import React from "react";
import MessageItem from "./MessageItem/MessageItem";

const Messages = (props) => {
    let messagesElements = props.state.messages.map(m => <MessageItem message={m.message} key={m.id}/>);
    let addMessage = () => {
        props.sendMessage();
    }

    let onMsgChange = (e) => {
        let text = e.target.value;
        props.onMsgBodyChange(text);
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
                    value={props.state.newMsgText}/>
            </div>
            <div>
                <button onClick={addMessage}>send</button>
            </div>
        </div>

    );
}

export default Messages;
