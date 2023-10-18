import {AppStateType} from "./redux-toolkit-store.ts";

export const getAuthorizedUserIdSelector = (state: AppStateType) => {
    return state.auth.userId;
}
export const getIsAuthSelector = (state: AppStateType) => {
    return state.auth.isAuth;
}
export const getCurrentUserLoginSelector = (state: AppStateType) => {
    return state.auth.login;
}
