import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBookAPI } from '../redux/books/bookSlice';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({ id, book }) => {
  const dispatch = useDispatch();

  const remove = (e) => {
    e.preventDefault();
    dispatch(removeBookAPI(id));
  };

  return (
    <div className="book">
      <div className="details">
        <p className="b-category">{book.category}</p>
        <h3 className="b-title">{book.title}</h3>
        <h4 className="b-author">{book.author}</h4>
        <div className="details-menu">
          <ul>
            <li className="comments">
              <p>Comments</p>
            </li>
            <li>
              <div className="line" />
            </li>
            <li className="remove">
              <button type="button" className="remove-btn" onClick={remove}>Remove</button>
            </li>
            <li>
              <div className="line" />
            </li>
            <li className="Edit">
              <p>Edit</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="status">
        <CircularProgressbar value={75} strokeWidth={8} className="progres" />
        <div className="percent-c">
          <p className="percent">75%</p>
          <p className="complete">Completed</p>
        </div>
      </div>
      <div className="vertical-line" />
      <div className="chapter">
        <p className="c-charapter"> CURRENT CHAPTER</p>
        <p className="b-charapter"> Erick </p>
        <button type="button" className="u-progress">UPDATE PROGRESS</button>
      </div>

    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  book: PropTypes.shape({
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
