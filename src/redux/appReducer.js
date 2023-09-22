import {getAuthUserData} from "./authReducer";

const INITIALIZED_SUCCESS = 'my-social-network/app/INITIALIZED-SUCCESS';

const initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state, initialized: true};
        default:
            return state;
    }
}

const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});
export const  initialApp = () => (dispatch) => {
    const promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {dispatch(initializedSuccess())})
}

export default appReducer;