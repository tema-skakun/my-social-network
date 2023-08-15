import {addMessageAC, onMsgChangeAC} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

function mapStateToProps (state){
    return {
        dialogsPage: state.dialogsPage,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        onMsgBodyChange: (text) => dispatch(onMsgChangeAC(text)),
        sendMessage: () => dispatch(addMessageAC()),
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);//container component to check auth

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);

export default DialogsContainer;
