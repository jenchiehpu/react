import { NavLink } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <nav>
      <ul className="menu">
        <li className="menu-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/inner">HomeInner</NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/login">login</NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/video">Videos</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Menu;
