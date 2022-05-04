import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { get } from '../redux/books/books';
import Book from './Book';

const BooksList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(get());
  }, []);
  console.log(books);
  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book[0]}
          book={book}
        />
      ))}
    </ul>
  );
};

export default BooksList;
