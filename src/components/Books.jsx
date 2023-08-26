import Book from './Book';
import '../styles/books.css';

const Books = () => (
  <div className="books">
    <Book title="The Hunger Games" cat="Action" author="Suzane Collins" progress="64" />
    <Book title="Dune" cat="Fiction" author="Frank Herbert" progress="8" />
    <Book title="Capital in the Twenty-First Century" cat="Economy" author="Suzane Collins" progress="0" />
  </div>
);

export default Books;
