import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/redux-toolkit-store';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
export const rerenderEntireTree = () => {
    root.render(
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
    );
};

rerenderEntireTree();

store.subscribe(() => {
    rerenderEntireTree();
})
