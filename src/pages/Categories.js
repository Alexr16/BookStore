import React from 'react';
import { useDispatch } from 'react-redux';
import { bookStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  return (
    <div className="categories-container">
      <button type="button" onClick={() => dispatch(bookStatus())}>Check status</button>
    </div>
  );
};
export default Categories;
