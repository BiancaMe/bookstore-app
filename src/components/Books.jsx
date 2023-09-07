import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import '../styles/books.css';
import { getBooks } from '../redux/books/bookSlice';

const Books = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const { bookList } = useSelector((store) => store.book);

  return (
    <div className="books">
      {Object.entries(bookList).map(([key, book]) => (
        <Book key={key} id={key} book={book[0]} />))}
    </div>
  );
};

export default Books;
