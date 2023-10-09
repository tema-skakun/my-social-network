import { configureStore } from '@reduxjs/toolkit';
import profileReducer from "../redux/profileReducer";
import dialogsReducer from "../redux/dialogsReducer";
import friendsReducer from "../redux/friendsReducer";
import usersReducer from "../redux/usersReducer";
import authReducer from "../redux/authReducer";
import appReducer from "../redux/appReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";

const store = configureStore({

    reducer: {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        friendsPage: friendsReducer,
        usersPage: usersReducer,
        auth: authReducer,
        app: appReducer,
        form: formReducer,
    },
    applyMiddleware: [thunkMiddleware],
});

window.__store__ = store;//just to view the store in the console

export default store;
