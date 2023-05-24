import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import { reducer } from './App';

let composeDevTools=composeWithDevTools();

export let store=configureStore({
    reducer
})