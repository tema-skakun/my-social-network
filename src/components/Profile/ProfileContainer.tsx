import {useCallback, useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import Profile from './Profile.tsx';
import {useParams} from 'react-router-dom';
import {compose} from '@reduxjs/toolkit';
import {getPostsSelector, getProfileSelector, getStatusSelector} from '../../redux/profileSelectors.ts';
import {getAuthorizedUserIdSelector, getIsAuthSelector} from '../../redux/authSelectors.ts';
import {
    addPost,
    getStatus,
    getUserProfile,
    updateAvatar,
    updateProfile,
    updateStatus
} from '../../redux/profileReducer.ts';
import {AppStateType} from '../../redux/redux-toolkit-store';
import {PostsType, ProfileType} from '../../types/types.ts';

type MapStatePropsType = {
    userId?: number | string;
    authorizedUserId: number;
    profile: ProfileType;
    posts: Array<PostsType>;
    status: string;
    isAuth: boolean;
};

type MapDispatchPropsType = {
    getUserProfile: (userId: number | string) => void;
    getStatus: (userId: number | string) => void;
    updateAvatar: (photos: any) => void;
    addPost: (newPostBody: string) => void;
    updateStatus: (status: string) => void;
    updateProfile: (profile: ProfileType) => void;
};

type PropsType = MapStatePropsType & MapDispatchPropsType;

function ProfileContainer(props: PropsType) {
    const dispatch = useDispatch();
    const { userId } = useParams();

    const refreshProfile = useCallback(() => {
        let profileUserId: number | string = userId;
        if (!profileUserId) {
            profileUserId = props.authorizedUserId || 2; // if logout
        }
        // calling another user's profile
        dispatch(getUserProfile(profileUserId));
        dispatch(getStatus(profileUserId));
    }, [userId, props.authorizedUserId, dispatch]);

    useEffect(() => {
        refreshProfile();
    }, [refreshProfile]);

    // const refreshProfile = () => {
    //     let profileUserId: number | string = userId;
    //     if (!profileUserId) {
    //         profileUserId = props.authorizedUserId || 2; // if logout
    //     }
    //     dispatch(getUserProfile(profileUserId));
    //     dispatch(getStatus(profileUserId));
    // };
    //
    // useEffect(() => {
    //     refreshProfile();
    // }, [userId, props.authorizedUserId]);

    // necessary to avoid prop drilling
    return (
        <Profile
            profile={props.profile}
            posts={props.posts}
            updateAvatar={props.updateAvatar}
            addPost={props.addPost}
            status={props.status}
            updateStatus={props.updateStatus}
            updateProfile={props.updateProfile}
            isOwner={!!props.authorizedUserId && !userId}
        />
    );
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: getPostsSelector(state),
        profile: getProfileSelector(state),
        status: getStatusSelector(state),
        authorizedUserId: getAuthorizedUserIdSelector(state),
        isAuth: getIsAuthSelector(state),
    };
};

export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus,
        updateAvatar,
        updateProfile,
        addPost,
    })
)(ProfileContainer);
