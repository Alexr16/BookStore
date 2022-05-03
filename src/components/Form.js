import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (title !== '' || author !== '') {
      const Book = {
        id: uuidv4(),
        title,
        author,
      };
      dispatch(addBook(Book));
    }
    setTitle('');
    setAuthor('');
  };

  return (
    <>
      <form className="form" onSubmit={submit}>
        <input placeholder="Book title" className="title" onChange={(e) => setTitle(e.target.value)} value={title} />
        <input placeholder="Book author" className="author" onChange={(e) => setAuthor(e.target.value)} value={author} />
        <button type="submit" label="Add" className="add-book">ADD BOOK</button>
      </form>

    </>
  );
};

export default Form;
