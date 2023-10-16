import {getAuthUserData} from "./authReducer.ts";

const INITIALIZED_SUCCESS = 'my-social-network/app/INITIALIZED-SUCCESS';

export type InitialStateType = {
    initialized: boolean,
}

const initialState: InitialStateType = {
    initialized: false,
};

const appReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state, initialized: true};
        default:
            return state;
    }
}

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS,
}

const initializedSuccess = (): InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS});
export const  initialApp = () => (dispatch: any) => {
    const promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {dispatch(initializedSuccess())})
}

export default appReducer;
