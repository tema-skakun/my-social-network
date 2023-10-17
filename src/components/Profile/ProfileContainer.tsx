import {connect} from "react-redux";
import Profile from "./Profile.tsx";
import {
    addPost,
    getStatus,
    getUserProfile,
    updateAvatar,
    updateProfile,
    updateStatus
} from "../../redux/profileReducer.ts";
import {useParams} from 'react-router-dom';
import {compose} from "@reduxjs/toolkit";
import {Component, FC} from "react";
import {PostsType, ProfileType} from "../../types/types";
import {AppStateType} from "../../redux/redux-toolkit-store";
import {
    getPostsSelector,
    getProfileSelector,
    getStatusSelector
} from "../../redux/profileSelectors.ts";
import {getAuthorizedUserIdSelector, getIsAuthSelector} from "../../redux/authSelectors.ts";

export function withRouter(Children: FC<PropsType>) {
    return (props: PropsType) => {
        const match: any = {params: useParams()};
        return <Children {...props} userId={match.params.userId}/>
    }
}

type MapStatePropsType = {
    userId?: number | string// ???
    authorizedUserId: number
    profile: ProfileType
    posts: Array<PostsType>
    status: string
    isAuth: boolean
}

type MapDispatchPropsType = {
    getUserProfile: (userId: number | string) => void
    getStatus: (userId: number | string) => void
    updateAvatar: (photos: any) => void
    addPost: (newPostBody: string) => void
    updateStatus: (status: string) => void
    updateProfile: (profile: ProfileType) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType;


class ProfileContainer extends Component<PropsType> {
    refreshProfile() {
        let userId = this.props.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                userId = 2;// - logout cause - samurai Dimych
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: PropsType) {
        if (this.props.userId !== prevProps.userId)
            this.refreshProfile();
    }

    render() {
        return (
            <Profile profile={this.props.profile}
                     posts={this.props.posts}
                     updateAvatar={this.props.updateAvatar}
                     addPost={this.props.addPost}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     updateProfile={this.props.updateProfile}
                     isOwner={!!this.props.authorizedUserId && !this.props.userId}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return (
        {
            posts: getPostsSelector(state),
            profile: getProfileSelector(state),
            status: getStatusSelector(state),
            authorizedUserId: getAuthorizedUserIdSelector(state),
            isAuth: getIsAuthSelector(state),
        }
    )
}

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, AppStateType>(
        mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus,
        updateAvatar,
        updateProfile,
        addPost
    }),
    withRouter,//added userId={match.params.userId}
)(ProfileContainer);
