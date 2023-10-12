import {connect} from "react-redux";
import React from "react";
import Profile from "./Profile";
import {getStatus, getUserProfile, updateAvatar, updateProfile, updateStatus} from "../../redux/profileReducer";
import {useParams} from 'react-router-dom';
import {compose} from "@reduxjs/toolkit";

export function withRouter(Children) {
    return (props) => {
        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                userId = 2;// - samurai dimych
                // this.props.history.push({LOGIN_PATH})//history is undefined
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId)
            this.refreshProfile();
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     updateProfile={this.props.updateProfile}
                     isOwner={!!this.props.authorizedUserId && !this.props.match.params.userId}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return (
        {
            profile: state.profilePage.profile,
            status: state.profilePage.status,
            authorizedUserId: state.auth.userId,
            isAuth: state.auth.isAuth,
        }
    )
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, updateAvatar, updateProfile}),
    withRouter,//added .match
)(ProfileContainer);
