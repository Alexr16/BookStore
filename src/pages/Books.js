import BooksList from '../components/BooksList';
import Form from '../components/Form';

const Books = () => (
  // const books = [
//   {
//     id: 1,
//     title: 'Six of Crows',
//     author: 'Leigh Bardugo',
//   },
//   {
//     id: 2,
//     title: 'Every Day',
//     author: 'David Levithan',
//   },
//   {
//     id: 3,
//     title: 'Darius the Great Is Not Okay',
//     author: 'Adib Khorram',
//   },
// ];
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
