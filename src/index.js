import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/redux-toolkit-store';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let rerenderEntireTree = () => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <Provider store={store}>
                    <App/>
                </Provider>
            </React.StrictMode>
        </BrowserRouter>
    );
};

rerenderEntireTree();

store.subscribe(() => {
    rerenderEntireTree();
})
