import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import MySocialNetwork from './App';
import store from './redux/redux-toolkit-store';

// const root = ReactDOM.createRoot(document.getElementById("root"));
// export let rerenderEntireTree = () => {
//     root.render(
//         <BrowserRouter>
//             <React.StrictMode>
//                 <Provider store={store}>
//                     <App/>
//                 </Provider>
//             </React.StrictMode>
//         </BrowserRouter>
//     );
// };
//
// rerenderEntireTree();
//
// store.subscribe(() => {
//     rerenderEntireTree();
// })


const root = ReactDOM.createRoot(document.getElementById("root"));
export let rerenderEntireTree = () => {
    root.render(<MySocialNetwork/>);
};

rerenderEntireTree();

store.subscribe(() => {
    rerenderEntireTree();
})