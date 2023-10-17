"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toolkit_1 = require("@reduxjs/toolkit");
var profileReducer_ts_1 = require("./profileReducer.ts");
var dialogsReducer_ts_1 = require("./dialogsReducer.ts");
var friendsReducer_ts_1 = require("./friendsReducer.ts");
var usersReducer_ts_1 = require("./usersReducer.ts");
var authReducer_ts_1 = require("./authReducer.ts");
var appReducer_ts_1 = require("./appReducer.ts");
var redux_thunk_1 = require("redux-thunk");
var redux_form_1 = require("redux-form");
var store = (0, toolkit_1.configureStore)({
    reducer: {
        profilePage: profileReducer_ts_1.default,
        dialogsPage: dialogsReducer_ts_1.default,
        friendsPage: friendsReducer_ts_1.default,
        usersPage: usersReducer_ts_1.default,
        auth: authReducer_ts_1.default,
        app: appReducer_ts_1.default,
        form: redux_form_1.reducer,
    },
    middleware: [redux_thunk_1.default],
});
// @ts-ignore
window.__store__ = store; //just to view the store in the console
exports.default = store;
