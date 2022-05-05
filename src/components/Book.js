import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import CircularProgressBar from './CircularProgressBar';

const Book = (prop) => {
  const { book } = prop;
  const [id, [{ title, author }]] = book;
  const dispatch = useDispatch();

  return (
    <li className="book-container">
      <div className="book-data">
        <div className="book-content">
          <div className="book-info">
            <h3>General</h3>
            <h4>{title}</h4>
            <p className="cool-blue">{author}</p>
          </div>
          <div className="buttons">
            <p className="comments">Comments</p>
            <button
              className="remove"
              type="button"
              label="Remove"
              onClick={() => {
                dispatch(removeBook(id));
              }}
            >
              Remove
            </button>
            <p className="edit">Edit</p>
          </div>
        </div>
        <div className="book-progress">
          <div className="progress-container">
            <CircularProgressBar
              strokeWidth="10"
              sqSize="70"
              percentage={64}
            />
          </div>
          <div>
            <p className="percentage">64%</p>
            <p>Completed</p>
          </div>
        </div>
        <div className="chapter-info">
          <h5>CURRENT CHAPTER</h5>
          <p>Chapter 17</p>
          <button
            type="button"
            label="Update"
            className="update-btn"
          >
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </li>
  );
};

export default Book;
