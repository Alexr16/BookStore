const ADD = 'ADD';
const REMOVE = 'REMOVE';

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
      return state.filter((book) => book.id !== action.book);

    default:
      return state;
  }
};

export default bookReducer;
