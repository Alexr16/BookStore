import { combineReducers, createStore } from 'redux';
import statusReducer from './books/books';
import bookReducer from './categories/categories';

const rootReducer = combineReducers({ statusReducer, bookReducer });
const store = createStore(rootReducer);

export default store;
