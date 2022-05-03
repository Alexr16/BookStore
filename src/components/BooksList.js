import Book from './Book';

const BooksList = (prop) => {
  const { books } = prop;
  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          id={book.id}
        />
      ))}
    </ul>
  );
};

// BooksList.propTypes = {
//   books: PropTypes.shape([]).isRequired,
// };
export default BooksList;
