import { configureStore } from '@reduxjs/toolkit';
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
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
