import {ProfileAPI} from "../api/api";

const ADD_POST = 'my-social-network/profile/ADD-POST';
const SET_USER_PROFILE = 'my-social-network/profile/SET-USER-PROFILE';
const SET_STATUS = 'my-social-network/profile/SET-STATUS';
const SET_AVATAR = 'my-social-network/profile/SET-AVATAR';
const DELETE_POST = 'my-social-network/profile/DELETE-POST';

let initialState = {
    posts: [
        {id: 1, message: 'Hello world!', likesCount: 10},
        {id: 2, message: "It's my first post", likesCount: 30},
    ],
    profile: null,
    status: '',
    avatar: null,
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
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
        case SET_AVATAR:
            return {...state, avatar: action.avatar};
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
export const setAvatar = (avatar) => {
    return {type: SET_AVATAR, avatar}
}

export const deletePost = (id) => {
    return {type: DELETE_POST, id}
}

//thunks

export const getUserProfile = (userId) => {//thunk
    return async (dispatch) => {
        let response = await ProfileAPI.getProfile(userId);//.then(response => {
        dispatch(setUserProfile(response));
    }
}
export const getStatus = (userId) => {//thunk
    return async (dispatch) => {
        let response = await ProfileAPI.getStatus(userId);//.then(response => {
        dispatch(setStatus(response.data));
    }
}
export const updateStatus = (status) => {//thunk
    return async (dispatch) => {
        let response = await ProfileAPI.updateStatus(status);//.then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
}
export const updateAvatar = (avatar) => {//thunk
    return async (dispatch) => {
        let response = await ProfileAPI.updateAvatar(avatar);//.then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAvatar(avatar));
        }
    }
}


export default profileReducer;
