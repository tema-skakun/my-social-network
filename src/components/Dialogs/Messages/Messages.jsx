import style from './Messages.module.css'
import React from "react";
import MessageItem from "./MessageItem/MessageItem";
import {addMessageAC, onMsgChangeAC} from "../../../redux/state";

const Messages = (props) => {
    let messagesElements = props.messages.map(m => <MessageItem message={m.message} key={m.id}/>);
    let newMessage = React.createRef();
    let addMessage = () => {
        props.dispatch(addMessageAC());
    }

    let onMsgChange = () => {
        let text = newMessage.current.value;
        props.dispatch(onMsgChangeAC(text));
    }

    return (
        <div>
            <div className={style.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea onChange={onMsgChange} ref={newMessage} value={props.newMsgText}/>
            </div>
            <div>
                <button onClick={addMessage}>send</button>
            </div>
        </div>

    );
}

export default Messages;
