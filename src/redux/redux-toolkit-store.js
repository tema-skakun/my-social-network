import { configureStore } from '@reduxjs/toolkit';
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

const store = configureStore({

    reducer: {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebarPage: sidebarReducer,
        usersPage: usersReducer,
        auth: authReducer,
    },
});

window.store = store;

export default store;