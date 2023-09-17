import {connect} from "react-redux";
import Friends from "../Friends";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "@reduxjs/toolkit";

function mapStateToProps(state) {
    return {
        friendsPage: state.friendsPage,
    }
}
export default compose(connect(mapStateToProps), withAuthRedirect)(Friends);
