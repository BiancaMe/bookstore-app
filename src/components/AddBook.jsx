import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { postBook } from '../redux/books/bookSlice';
import '../styles/newBook.css';

const AddNewBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Comedy');

  const saveTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const saveAuthor = (e) => {
    e.preventDefault();
    setAuthor(e.target.value);
  };

  const saveCategory = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    if (title && author && category) {
      dispatch(postBook({ title, author, category }));
      document.getElementById('form').reset();
    }
  };

  return (
    <div>
      <h3 className="new-book">ADD NEW BOOK</h3>
      <form id="form" onSubmit={submit}>
        <input type="text" className="title-form input" placeholder="Book title" onChange={saveTitle} />
        <input type="text" className="author-form input" placeholder="Book Author" onChange={saveAuthor} />
        <select
          className="category-form input"
          placeholder="Author"
          onChange={saveCategory}
        >
          <option>Comedy</option>
          <option>Economy</option>
          <option>Fiction</option>
          <option>Horror</option>
        </select>
        <button type="submit" className="btn-add">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddNewBook;
