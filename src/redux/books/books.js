const ADD = 'ADD';
const REMOVE = 'REMOVE';

export const addBook = (book) => ({
  type: ADD, book,
});

export const removeBook = (book) => ({
  type: REMOVE, book,
});

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ];

    case REMOVE:
      return state;

    default:
      return state;
  }
};

export default reducer;
