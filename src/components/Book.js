// import React from 'react';
// import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (prop) => {
  const { title, author, id } = prop;
  const dispatch = useDispatch();

  return (
    <li className="book-container">
      <div className="book-data">
        <h4>{`Title: ${title}`}</h4>
        <p>{`Author: ${author}`}</p>
        <button
          type="button"
          label="Remove"
          onClick={() => {
            dispatch(removeBook(id));
          }}
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default Book;
