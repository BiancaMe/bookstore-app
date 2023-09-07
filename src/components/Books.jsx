/* eslint-disable react/jsx-props-no-spreading */
import { useSelector } from 'react-redux';
import Book from './Book';
import '../styles/books.css';

const Books = () => {
  const { bookList } = useSelector((store) => store.book);

  return (
    <div className="books">
      {bookList.map((book) => <Book key={book.id} {...book} />)}
    </div>
  );
};

export default Books;
