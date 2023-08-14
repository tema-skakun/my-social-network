import {addMessageAC, onMsgChangeAC} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";

function mapStateToProps (state){
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        onMsgBodyChange: (text) => dispatch(onMsgChangeAC(text)),
        sendMessage: () => dispatch(addMessageAC()),
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;
