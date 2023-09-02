import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/bookSlice';

const AddNewBook = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    id: '-1', title: '', author: 'Susan Collins', category: 'Comedy',
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

  const setCategory = (e) => {
    setData((values) => ({
      ...values,
      category: e.target.value,
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
        <input type="text" className="author-form" placeholder="Book Author" onChange={setAuthor} />
        <select
          className="author-form"
          placeholder="Author"
          onChange={setCategory}
        >
          <option value="Comedy">Comedy</option>
          <option value="Economy">Economy</option>
          <option value="Fiction">Fiction</option>
          <option value="Horror">Horror</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddNewBook;
