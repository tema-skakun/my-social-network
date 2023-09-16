import {addMessage} from "../../redux/dialogsReducer";
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
        addMessage: (newMessageBody) => dispatch(addMessage(newMessageBody)),
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
