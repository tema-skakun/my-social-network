import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
// import store from './redux/store';
import store from './redux/redux-toolkit-store';

const root = ReactDOM.createRoot(document.getElementById("root"));
export let rerenderEntireTree = (state) => {
    root.render(
        <Provider store={store}>
            <BrowserRouter>
                <React.StrictMode>
                    <App
                        state={state}
                        dispatch={store.dispatch.bind(store)}
                    />
                </React.StrictMode>
            </BrowserRouter>
        </Provider>
    );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree)
