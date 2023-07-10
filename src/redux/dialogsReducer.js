const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MSG_TEXT = 'UPDATE-NEW-MSG-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMsg = {
                id: 8,
                message: state.newMsgText
            };
            state.messages.push(newMsg);
            state.newMsgText = '';
            return state;
        case UPDATE_NEW_MSG_TEXT:
            state.newMsgText = (action.msgText);
            return state;
        default:
            return state;
    }
}

export const addMessageAC = () => {
    return {type: ADD_MESSAGE}
}

export const onMsgChangeAC = (text) => {
    return {type: UPDATE_NEW_MSG_TEXT, msgText: text}
}

export default dialogsReducer;