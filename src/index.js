import './index.css';
import state, {subscribe} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addMessage, addPost, updateNewMsgText, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let rerenderEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App
                    state={state}
                    addPost={addPost}
                    updateNewPostText={updateNewPostText}
                    addMessage={addMessage}
                    updateNewMsgText={updateNewMsgText}
                />
            </React.StrictMode>
        </BrowserRouter>
    );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree)
