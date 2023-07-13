import { configureStore } from '@reduxjs/toolkit';
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";

const store = configureStore({

    reducer: {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebarPage: sidebarReducer,
        usersPage: usersReducer,
    },
});

export default store;