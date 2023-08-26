const AddNewBook = () => (
  <div>
    <h3>Add New Book</h3>
    <form>
      <input type="text" className="title-form" placeholder="Book title" />
      <select className="author-form" placeholder="Author">
        <option value="action">Susan Collins</option>
        <option value="fiction">Franks</option>
        <option value="economy">Collins</option>
        <option value="comedy">Frank Herbert</option>
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default AddNewBook;
