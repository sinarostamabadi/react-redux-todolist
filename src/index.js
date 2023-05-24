import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store';
import { Provider } from "react-redux";

let $root=ReactDOM.createRoot(document.body);
$root.render(
    <Provider store={store}>
        <App />
    </Provider>
)