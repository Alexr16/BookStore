import BooksList from '../components/BooksList';
import Form from '../components/Form';

const Books = () => (
  <>
    <div className="books-container">
      <BooksList />
    </div>
    <div />
    <div className="form-container">
      <h2>ADD NEW BOOK</h2>
      <Form />
    </div>
  </>
);
export default Books;
