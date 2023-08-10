import { configureStore } from '@reduxjs/toolkit';
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

const store = configureStore({

    reducer: {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebarPage: sidebarReducer,
        usersPage: usersReducer,
        auth: authReducer,
    },
    applyMiddleware: [thunkMiddleware],
});

window.store = store;//to view the store in the console

export default store;
