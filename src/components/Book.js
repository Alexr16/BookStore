import React from 'react';
import { PropTypes } from 'prop-types';

const Book = (props) => {
  const { book } = props;
  return (
    <li className="book-container">
      <div className="book-data">
        <h4>{`Title: ${book.title}`}</h4>
        <p>{`Author: ${book.author}`}</p>
        <button type="button" label="Remove">Remove</button>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
