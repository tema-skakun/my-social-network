import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/redux-toolkit-store.ts';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
export const rerenderEntireTree = () => {
    root.render(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/*<HashRouter>*/}
            <Provider store={store}>
                <App/>
            </Provider>
        {/*</HashRouter>*/}
        </BrowserRouter>
    );
};

rerenderEntireTree();

store.subscribe(() => {
    rerenderEntireTree();
})
