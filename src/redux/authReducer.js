import {AuthAPI, SecurityAPI} from "../api/api";
import {stopSubmit} from "redux-form"

const SET_USER_DATA = 'my-social-network/auth/SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'my-social-network/auth/GET-CAPTCHA-URL-SUCCESS';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.payload };
        case GET_CAPTCHA_URL_SUCCESS:
            return { ...state, captchaUrl: action.payload.captchaUrl };
        // case SET_USER_DATA:
        // case GET_CAPTCHA_URL_SUCCESS:
        //     return {...state, ...action.payload};
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth, captchaUrl) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth, captchaUrl}
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: SET_USER_DATA,
    payload: {captchaUrl}
});

export const getAuthUserData = () => async (dispatch) => {
    const response = await AuthAPI.me();//.then(response => {
    if (response.resultCode === 0) {
        const {email, id, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true, null));
    }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    const response = await AuthAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0)
        dispatch(getAuthUserData());
    else {
        if (response.data.resultCode === 10)
            dispatch(getCaptchaUrl())
        const message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}
export const logout = () => async (dispatch) => {
    const response = await AuthAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false, null));
    }
}

export const getCaptchaUrl = () => {//thunk
    return async (dispatch) => {
        const response = await SecurityAPI.getCaptchaUrl();
        const captchaUrl = response.data.url;
        dispatch(getCaptchaUrlSuccess(captchaUrl));
    }
}

export default authReducer;
