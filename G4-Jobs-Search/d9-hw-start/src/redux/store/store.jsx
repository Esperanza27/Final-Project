/* import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from '../reducers/favoritesReducer'
const store = configureStore({
    reducer: favoritesReducer
});
export default store; */

import { createStore } from 'redux'
import favoritesReducer from '../reducers/favoritesReducer';

const store = createStore(favoritesReducer);

export default store;