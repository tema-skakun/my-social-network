import {getAuthUserData} from "./authReducer";

const INITIALIZED_SUCCESS: string = 'my-social-network/app/INITIALIZED-SUCCESS';

type InitialStateType = {
    initialized: boolean,
}

type InitializedSuccessType = {
    type: typeof INITIALIZED_SUCCESS,
}

const initialState: InitialStateType = {
    initialized: false,
};

const appReducer = (state: InitialStateType = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state, initialized: true};
        default:
            return state;
    }
}

const action: InitializedSuccessType = {
    type: INITIALIZED_SUCCESS
}

const initializedSuccess = () => (action);
export const  initialApp = () => (dispatch) => {
    const promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {dispatch(initializedSuccess())})
}

export default appReducer;
