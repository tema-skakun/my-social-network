import {addMessageAC} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "@reduxjs/toolkit";

function mapStateToProps(state) {
    return {
        dialogsPage: state.dialogsPage,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sendMessage: (newMessageBody) => dispatch(addMessageAC(newMessageBody)),
    }
}

// let AuthRedirectComponent = withAuthRedirect(Dialogs);//container component to check auth
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);
// export default DialogsContainer;

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
