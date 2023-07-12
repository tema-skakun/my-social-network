import {connect} from "react-redux";
import Friends from "../Friends";

function mapStateToProps (state){
    return {
        sidebarPage: state.sidebarPage
    }
}

// function mapDispatchToProps (dispatch) {
//     return {
//         onMsgBodyChange: (text) => dispatch(onMsgChangeAC(text)),
//         sendMessage: () => dispatch(addMessageAC()),
//     }
// }

const FriendsContainer = connect(mapStateToProps, ) (Friends);

export default FriendsContainer;
