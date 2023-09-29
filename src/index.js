import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/redux-toolkit-store';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
export const rerenderEntireTree = () => {
    root.render(
        // <HashRouter> {/*this is only necessary for the app to work correctly on github-pages*/}
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
        // </HashRouter>
    );
};

rerenderEntireTree();

store.subscribe(() => {
    rerenderEntireTree();
})
