import {connect} from "react-redux";
import React from "react";
import Profile from "./Profile";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profileReducer";
import {useParams} from 'react-router-dom';
import {compose} from "@reduxjs/toolkit";

export function withRouter(Children) {
    return (props) => {
        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 29693;//my id
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => {
    return (
        {
            profile: state.profilePage.profile,
            status: state.profilePage.status,
        }
    )
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);//HOC to check auth
// let withUrlProfileContainer = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, {getUserProfile})(withUrlProfileContainer);

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect//
)(ProfileContainer);
