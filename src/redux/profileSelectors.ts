import {AppStateType} from "./redux-toolkit-store.ts";

export const getProfileSelector = (state: AppStateType) => {
    return state.profilePage.profile;
}
export const getPostsSelector = (state: AppStateType) => {
    return state.profilePage.posts;
}
export const getStatusSelector = (state: AppStateType) => {
    return state.profilePage.status;
}
