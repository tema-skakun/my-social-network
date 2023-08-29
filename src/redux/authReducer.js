import {AuthAPI} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
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
export const getAuthUserData = () => (dispatch) => {
    AuthAPI.me().then(response => {
            if (response.resultCode === 0) {
                let {email, id, login} = response.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
}

export const login = (email, password, rememberMe) => (dispatch) => {
    AuthAPI.login(email, password, rememberMe).then(response => {
            if (response.resultCode === 0) {
                dispatch(getAuthUserData());
            }
            else if (response.resultCode === 1) {
                console.log("Incorrect data");
            }
            else if (response.resultCode === 10) {
                console.log("Captcha");
            }
        })
}
export const logout = () => (dispatch) => {
    AuthAPI.logout().then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
}


export default authReducer;