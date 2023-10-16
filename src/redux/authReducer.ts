import {AuthAPI, SecurityAPI} from "../api/api";
import {stopSubmit} from "redux-form"

const SET_USER_DATA = 'my-social-network/auth/SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'my-social-network/auth/GET-CAPTCHA-URL-SUCCESS';

// export type InitialStateType = {
//     userId: number | null,
//     email: string | null,
//     login: string | null,
//     isAuth: boolean,
//     captchaUrl: string | null,
// }

const initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {...state, ...action.payload, userI2: 12};
        default:
            return state;
    }
};

type SetAuthUserDataActionPayloadType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captchaUrl: string | null
}

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataActionPayloadType
}

export const setAuthUserData = (userId: number | null,
                                email: string | null,
                                login: string | null,
                                isAuth: boolean,
                                captchaUrl: string | null): SetAuthUserDataActionType => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth, captchaUrl}
});

type GetCaptchaUrlSuccessActionType = {
    type: typeof SET_USER_DATA,
    payload: {captchaUrl: string}
}

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({
    type: SET_USER_DATA,
    payload: {captchaUrl}
});

export const getAuthUserData = () => async (dispatch: any) => {
    const response = await AuthAPI.me();
    if (response.resultCode === 0) {
        const {email, id, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true, null));
    }
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
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
export const logout = () => async (dispatch: any) => {
    const response = await AuthAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false, null));
    }
}

export const getCaptchaUrl = () => {//thunk
    return async (dispatch: any) => {
        const response = await SecurityAPI.getCaptchaUrl();
        const captchaUrl = response.data.url;
        dispatch(getCaptchaUrlSuccess(captchaUrl));
    }
}

export default authReducer;
