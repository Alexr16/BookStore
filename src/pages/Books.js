import React from 'react';
import BooksList from '../components/BooksList';
import Form from '../components/Form';

const Books = () => {
  const books = [
    {
      id: 1,
      title: 'Six of Crows',
      author: 'Leigh Bardugo',
    },
    {
      id: 2,
      title: 'Every Day',
      author: 'David Levithan',
    },
    {
      id: 3,
      title: 'Darius the Great Is Not Okay',
      author: 'Adib Khorram',
    },
  ];

  return (
    <>
      <div className="books-container">
        <BooksList
          books={books}
        />
      </div>
      <div>
        <Form />
      </div>
    </>
  );
};
export default Books;
