import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => (
  <header>
    <div className="nav-logo">
      <a href="/" className="logo">Bookstore CMS</a>
      <nav className="navbar">
        <ul className="item-c">
          <li>
            <NavLink className="item" to="/">Books</NavLink>
          </li>
          <li>
            <NavLink className="item" to="/categories">Categories</NavLink>
          </li>
        </ul>
      </nav>
    </div>
    <div className="login">Log</div>
  </header>

);

export default Navbar;
