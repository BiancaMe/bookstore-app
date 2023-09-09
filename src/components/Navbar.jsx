import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import User from '../icons/icon';

const Navbar = () => (
  <header>
    <div className="nav-logo">
      <a href="/" className="logo">Bookstore CMS</a>
      <nav className="navbar">
        <ul className="item-c">
          <li>
            <NavLink className="item" to="/">BOOKS</NavLink>
          </li>
          <li>
            <NavLink className="item" to="/categories">CATEGORIES</NavLink>
          </li>
        </ul>
      </nav>
    </div>
    <User />
  </header>

);

export default Navbar;
