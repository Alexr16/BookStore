import React from 'react';

const Form = () => (
  <>
    <div className="form">
      <input placeholder="Book title" className="title" />
      <input placeholder="Book author" className="author" />
      <button type="submit" label="Add" className="add-book">ADD BOOK</button>
    </div>

  </>
);

export default Form;
