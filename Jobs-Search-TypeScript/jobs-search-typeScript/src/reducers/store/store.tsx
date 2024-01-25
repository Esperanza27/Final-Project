import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favoritesReducers from '../reducer/favoritesReducers';
import jobReducer from "../reducer/jobReducer";

const mixReducer = combineReducers({
    reducer:  favoritesReducers,
    job: jobReducer
})

const store = configureStore({
    reducer: mixReducer,
});    

export default store;