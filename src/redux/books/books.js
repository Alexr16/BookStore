const ADD = 'bookstore/books/ADD_BOOK';
const REMOVE = 'bookstore/books/REMOVE_BOOK';

export const addBook = (book) => ({
  type: ADD, book,
});

export const removeBook = (book) => ({
  type: REMOVE, book,
});

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state, action.book,
      ];

    case REMOVE:
      return state.filter((book) => book.id !== action.book.id);

    default:
      return state;
  }
};

export default bookReducer;
