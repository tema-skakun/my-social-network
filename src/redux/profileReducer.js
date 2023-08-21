import {ProfileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const SET_AVATAR = 'SET-AVATAR';

let initialState = {
    posts: [
        {id: 1, message: 'Hello world!', likesCount: 10},
        {id: 2, message: "It's my first post", likesCount: 30},
    ],
    newPostText: '',
    profile: null,
    status: '',
    avatar: null,
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 100
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.postText};
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_STATUS:
            return {...state, status: action.status};
        case SET_AVATAR:
            return {...state, avatar: action.avatar};
        default:
            return state;
    }
}

export const addPostAC = () => {
    return {type: ADD_POST}
}
export const onPostChangeAC = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, postText: text}
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

//thunks

export const getUserProfile = (userId) => {//thunk
    return (dispatch) => {
        ProfileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response));
            })
    }
}
export const getStatus = (userId) => {//thunk
    return (dispatch) => {
        ProfileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            })
    }
}
export const updateStatus = (status) => {//thunk
    return (dispatch) => {
        ProfileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            })
    }
}
export const updateAvatar = (avatar) => {//thunk
    return (dispatch) => {
        ProfileAPI.updateAvatar(avatar)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAvatar(avatar));
                }
            })
    }
}



export default profileReducer;
