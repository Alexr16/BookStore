import { createBook, deleteBook, URL } from '../../components/Api';

const ADD = 'bookStore/books/ADD_BOOK';
const REMOVE = 'bookStore/books/REMOVE_BOOK';
const GET = 'bookStore/books/GET_BOOK';

const initialState = [];

export const get = () => async (dispatch) => {
  const response = await fetch(URL);
  const data = await response.json();
  const booksList = Object.entries(data);
  dispatch({
    type: GET,
    booksList,
  });
};

export const addBook = (book) => async (dispatch) => {
  const { id, title, author } = book;
  await createBook(id, title, author);
  dispatch({
    type: ADD,
    book: [
      id,
      [{
        title,
        author,
      }]],
  });
};

export const removeBook = (book) => async (dispatch) => {
  await deleteBook(book);
  dispatch({
    type: REMOVE,
    book,
  });
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET:
      return action.booksList;

    case ADD:
      return [
        ...state, action.book,
      ];

    case REMOVE:
      return state.filter((book) => book[0] !== action.book);

    default:
      return state;
  }
};

export default booksReducer;
