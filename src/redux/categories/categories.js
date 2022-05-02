const STATUS = 'STATUS';

export const bookStatus = (book) => ({
  type: STATUS, book,
});

const reducer = (state = [], action) => {
  switch (action.type) {
    case STATUS:
      return 'Under construction';

    default:
      return state;
  }
};

export default reducer;
