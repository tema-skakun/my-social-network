import {AuthAPI} from "../api/api";
import {stopSubmit} from "redux-form"

const SET_USER_DATA = 'my-social-network/auth/SET-USER-DATA';

const initialState = {
    usersId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload};
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});
export const getAuthUserData = () => async (dispatch) => {
    const response = await AuthAPI.me();//.then(response => {
    if (response.resultCode === 0) {
        const {email, id, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    const response = await AuthAPI.login(email, password, rememberMe);//.then(response => {
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        const message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}
export const logout = () => async (dispatch) => {
    const response = await AuthAPI.logout();//.then(response => {
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;
