import {render} from '@testing-library/react';
import App from "./App";
import {unmountComponentAtNode} from "react-dom";
import React from "react";
import {Provider} from "react-redux";
import store from "./redux/redux-toolkit-store";
import {BrowserRouter} from "react-router-dom";

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    );
    unmountComponentAtNode(div);
})
