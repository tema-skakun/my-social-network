import {ProfileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'my-social-network/profile/ADD-POST';
const SET_USER_PROFILE = 'my-social-network/profile/SET-USER-PROFILE';
const SET_STATUS = 'my-social-network/profile/SET-STATUS';
const SET_AVATAR_SUCCESS = 'my-social-network/profile/SET-AVATAR-SUCCESS';
const DELETE_POST = 'my-social-network/profile/DELETE-POST';

const initialState = {
    posts: [
        {id: 1, message: 'Hello world!', likesCount: 10},
        {id: 2, message: "It's my first post", likesCount: 30},
    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 3,
                message: action.newPostBody,
                likesCount: 100
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_STATUS:
            return {...state, status: action.status};
        case SET_AVATAR_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.avatar}};
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.id)};
        default:
            return state;
    }
}

export const addPostAC = (newPostBody) => {
    return {type: ADD_POST, newPostBody}
}

export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile}
}

export const setStatus = (status) => {
    return {type: SET_STATUS, status}
}

export const setAvatarSuccess = (avatar) => {
    return {type: SET_AVATAR_SUCCESS, avatar}
}

export const deletePost = (id) => {
    return {type: DELETE_POST, id}
}

//thunks

export const getUserProfile = (userId) => {//thunk
    return async (dispatch) => {
        const response = await ProfileAPI.getProfile(userId);
        dispatch(setUserProfile(response));
    }
}

export const getStatus = (userId) => {//thunk
    return async (dispatch) => {
        const response = await ProfileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
    }
}

export const updateStatus = (status) => {//thunk
    return async (dispatch) => {
        const response = await ProfileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
}

export const updateAvatar = (avatar) => {//thunk
    return async (dispatch) => {
        const response = await ProfileAPI.updateAvatar(avatar);
        if (response.data.resultCode === 0) {
            dispatch(setAvatarSuccess(response.data.data.photos));
        }
    }
}

export const updateProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await ProfileAPI.updateProfile(profile);//.then(response => {
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        const message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit('edit-profile', {_error: message}));
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;
