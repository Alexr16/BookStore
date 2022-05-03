// import React from 'react';
// import { PropTypes } from 'prop-types';
// import { useDispatch } from 'react-redux';

const Book = (prop) => {
  const { title, author } = prop;

  return (
    <li className="book-container">
      <div className="book-data">
        <h4>{`Title: ${title}`}</h4>
        <p>{`Author: ${author}`}</p>
        <button type="button" label="Remove">Remove</button>
      </div>
    </li>
  );
};

// Book.propTypes = {
//   book: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default Book;
