import { configureStore } from '@reduxjs/toolkit';
import profileReducer from "./profileReducer.ts";
import dialogsReducer from "./dialogsReducer.ts";
import friendsReducer from "./friendsReducer.ts";
import usersReducer from "./usersReducer.ts";
import authReducer from "./authReducer.ts";
import appReducer from "./appReducer.ts";
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
