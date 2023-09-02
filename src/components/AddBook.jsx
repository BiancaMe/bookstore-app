import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/bookSlice';

const AddNewBook = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    id: '-1', title: '', author: 'Susan Collins', category: 'None',
  });
  const list = useSelector((state) => state.book.bookList);
  const setTitle = (e) => {
    setData((values) => ({
      ...values,
      title: e.target.value,
      id: `${list.length + 1}`,
    }));
  };
  const setAuthor = (e) => {
    setData((values) => ({
      ...values,
      author: e.target.value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(addBook(data));
  };

  return (
    <div>
      <h3>Add New Book</h3>
      <form onSubmit={submit}>
        <input type="text" className="title-form" placeholder="Book title" onChange={setTitle} />
        <select
          className="author-form"
          placeholder="Author"
          onChange={setAuthor}
        >
          <option value="Susan Collins">Susan Collins</option>
          <option value="Franks">Franks</option>
          <option value="Collins">Collins</option>
          <option value="Frank Herbert">Frank Herbert</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddNewBook;
