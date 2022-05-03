const ADD = 'bookstore/books/ADD_BOOK';
const REMOVE = 'bookstore/books/REMOVE_BOOK';

const initialState = [
  {
    id: 1,
    title: 'Six of Crows',
    author: 'Leigh Bardugo',
  },
  {
    id: 2,
    title: 'Every Day',
    author: 'David Levithan',
  },
  {
    id: 3,
    title: 'Darius the Great Is Not Okay',
    author: 'Adib Khorram',
  },
];

export const addBook = (book) => ({
  type: ADD,
  book,
});

export const removeBook = (book) => ({
  type: REMOVE,
  book,
});

const booksReducer = (state = initialState, action) => {
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

export default booksReducer;
