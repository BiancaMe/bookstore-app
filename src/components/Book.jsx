import PropTypes from 'prop-types';

const Book = (props) => {
  const {
    title, cat, author, progress,
  } = props;
  return (
    <div className="book">
      <div className="details">
        <p className="b-category">{cat}</p>
        <h3 className="b-title">{title}</h3>
        <h4 className="b-author">{author}</h4>
        <div className="details-menu">
          <ul>
            <li className="comments">
              <p>Comments</p>
            </li>
            <li>
              <div className="line" />
            </li>
            <li className="remove">
              <p>Remove</p>
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
        <p>
          {progress}
          {' '}
          %
        </p>
      </div>
      <div className="line" />
      <div>

        <p className="c-charapter"> CURRENT CHAPTER</p>
        <p className="b-charapter" />
        <button type="button" className="u-progress">UPDATE PROGRESS</button>
      </div>

    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  cat: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
};

export default Book;
