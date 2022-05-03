import { combineReducers, createStore } from 'redux';
import categoriesReducer from './books/books';
import booksReducer from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});
const store = createStore(rootReducer);

export default store;
