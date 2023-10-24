import {ProfileAPI} from "../api/api.ts";
import {stopSubmit} from "redux-form";
import {PhotosType, PostsType, ProfileType, ResultCodesEnum} from "../types/types.ts";

const ADD_POST = 'my-social-network/profile/ADD-POST';
const SET_USER_PROFILE = 'my-social-network/profile/SET-USER-PROFILE';
const SET_STATUS = 'my-social-network/profile/SET-STATUS';
const SET_AVATAR_SUCCESS = 'my-social-network/profile/SET-AVATAR-SUCCESS';
const DELETE_POST = 'my-social-network/profile/DELETE-POST';

const initialState = {
    posts: [
        {id: 1, message: "It's my first post", likesCount: 30},
        {id: 2, message: 'Hello world!', likesCount: 10},
    ] as Array<PostsType>,
    profile: null as ProfileType | null,
    status: '',
};

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {

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
            return {...state, profile: {...state.profile, photos: action.photos}};
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.id)};
        default:
            return state;
    }
}

type AddPostACType = {
    type: typeof ADD_POST,
    newPostBody: string
}
export const addPost = (newPostBody: string): AddPostACType => {
    return {type: ADD_POST, newPostBody}
}
type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => {
    return {type: SET_USER_PROFILE, profile}
}
type SetStatusActionType = {
    type: typeof SET_STATUS,
    status: string
}
export const setStatus = (status: string): SetStatusActionType => {
    return {type: SET_STATUS, status}
}
type SetAvatarSuccessActionType = {
    type: typeof SET_AVATAR_SUCCESS,
    photos: PhotosType
}
export const setAvatarSuccess = (photos: PhotosType): SetAvatarSuccessActionType => {
    return {type: SET_AVATAR_SUCCESS, photos}
}
type DeletePostActionType = {
    type: typeof DELETE_POST,
    id: number
}
export const deletePost = (id: number): DeletePostActionType => {
    return {type: DELETE_POST, id}
}

//thunks
export const getUserProfile = (userId: number) => {//thunk
    return async (dispatch: any) => {
        const response = await ProfileAPI.getProfile(userId);
        dispatch(setUserProfile(response));
    }
}

export const getStatus = (userId: number) => {//thunk
    return async (dispatch: any) => {
        const response = await ProfileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
    }
}

export const updateStatus = (status: string) => {//thunk
    return async (dispatch: any) => {
        const response = await ProfileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
}

export const updateAvatar = (photos: any) => {//thunk
    return async (dispatch: any) => {
        const response = await ProfileAPI.updateAvatar(photos);
        if (response.resultCode === 0) {
            dispatch(setAvatarSuccess(response.data));
        }
    }
}

export const updateProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;
    const response = await ProfileAPI.updateProfile(profile);//.then(response => {
    if (response.resultCode === ResultCodesEnum.Success) {
        dispatch(getUserProfile(userId));
    } else {
        const message = response.messages.length > 0 ? response.messages[0] : "Some error";
        dispatch(stopSubmit('edit-profile', {_error: message}));
        return Promise.reject(response.messages[0]);
    }
}

export default profileReducer;
