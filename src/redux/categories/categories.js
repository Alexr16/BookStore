const STATUS = 'bookstore/categories/BOOK_STATUS';

export const bookStatus = () => ({
  type: STATUS,
});

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case STATUS:
      return 'Under construction';

    default:
      return state;
  }
};

export default categoriesReducer;
