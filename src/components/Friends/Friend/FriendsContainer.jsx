import {connect} from "react-redux";
import Friends from "../Friends";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "@reduxjs/toolkit";

function mapStateToProps(state) {
    return {
        sidebarPage: state.sidebarPage,
    }
}

// function mapDispatchToProps (dispatch) {
//     return {
//         onMsgBodyChange: (text) => dispatch(onMsgChangeAC(text)),
//         sendMessage: () => dispatch(addMessageAC()),
//     }
// }

// let AuthRedirectComponent = withAuthRedirect(Friends);//HOC to check auth
// const FriendsContainer = connect(mapStateToProps, ) (AuthRedirectComponent);
// export default FriendsContainer;

export default compose(
    connect(mapStateToProps,),
    withAuthRedirect
)(Friends);
