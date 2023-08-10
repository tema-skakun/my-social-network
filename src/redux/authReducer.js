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
            return {...state, ...action.data, isAuth: true};
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export const getAuthUserData = () => {//thunk
    return (dispatch) => {
        AuthAPI.me()
            .then(response => {
                if (response.resultCode === 0) {
                    let {id, email, login} = response.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            })
    }
}
export default authReducer;