import {addMessageAC, onMsgChangeAC} from "../../../redux/dialogsReducer";
import Messages from "./Messages";
import {connect} from "react-redux";

function mapStateToProps (state){
    return {
        dialogsPage: state.dialogsPage
    }
}

function mapDispatchToProps (dispatch) {
    return {
        onMsgBodyChange: (text) => dispatch(onMsgChangeAC(text)),
        sendMessage: () => dispatch(addMessageAC()),
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps) (Messages);

export default MessagesContainer;
