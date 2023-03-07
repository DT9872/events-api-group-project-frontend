import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/">
        <h1>GrandStand</h1>
      </Link>
      <nav>
        <ul>
          <Link to="/events/favorites">
            <li>Favorites</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
