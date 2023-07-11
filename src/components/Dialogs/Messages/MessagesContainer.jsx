import React from "react";
import {addMessageAC, onMsgChangeAC} from "../../../redux/dialogsReducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {
    let addMessage = () => {
        props.dispatch(addMessageAC());
    }

    let onMsgChange = (text) => {
        props.dispatch(onMsgChangeAC(text));
    }

    return <Messages state={props.state} sendMessage={addMessage} onMsgBodyChange={onMsgChange}/>
}

export default MessagesContainer;
