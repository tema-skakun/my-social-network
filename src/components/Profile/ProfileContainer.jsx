import {connect} from "react-redux";
import React from "react";
import Profile from "./Profile";
import {getStatus, getUserProfile, updateAvatar, updateStatus} from "../../redux/profileReducer";
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
                userId = 29693;// - my id, need fix it
                // this.props.history.push("/login")//history is undefined
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
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

const mapStateToProps = (state) => {
    return (
        {
            profile: state.profilePage.profile,
            status: state.profilePage.status,
            authorizedUserId: state.auth.usersId,
            isAuth: state.auth.isAuth,
        }
    )
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, updateAvatar}),
    withRouter,
)(ProfileContainer);
