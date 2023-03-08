import { Link } from "react-router-dom";
import "./Header.css";
import heart from "../assets/heart-regular.svg";
import cart from "../assets/cart-shopping-solid.svg";
import user from "../assets/user-solid.svg";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/">
        <h1>GrandStand</h1>
      </Link>
      <nav>
        <ul>
          <Link to="/events/favorites">
            <li>
              Login
              <img src={user} alt="cart" />
            </li>
            <li>
              Favorites
              <img src={heart} alt="heart" />
            </li>

            <li>
              Checkout
              <img src={cart} alt="" />
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
