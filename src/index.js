import './index.css';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let rerenderEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App
                    state={state}
                    addPost={store.addPost.bind(store)}
                    updateNewPostText={store.updateNewPostText.bind(store)}
                    addMessage={store.addMessage.bind(store)}
                    updateNewMsgText={store.updateNewMsgText.bind(store)}
                />
            </React.StrictMode>
        </BrowserRouter>
    );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree)
