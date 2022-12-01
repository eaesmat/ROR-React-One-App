import greeting from "./greetings/greetings";
import thunk from 'redux-thunk';
import { configureStore, combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    greeting
})

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
});

export default store;