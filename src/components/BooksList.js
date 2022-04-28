import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BooksList = (props) => {
  const { books } = props;
  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book.id}
          book={book}
        />
      ))}
    </ul>
  );
};

BooksList.propTypes = {
  books: PropTypes.shape([]).isRequired,
};
export default BooksList;
