import AddNewBook from '../components/AddBook';
import Books from '../components/Books';
import Navbar from '../components/Navbar';

const Home = () => (
  <div className="app">
    <Navbar />
    <div className="sections">
      <Books />
      <hr />
      <AddNewBook />
    </div>
  </div>
);

export default Home;
