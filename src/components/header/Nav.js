import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/" className="nav-item" aria-label="home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-item" aria-label="about">
            About
          </Link>
        </li>
        <li>
          <Link to="/menu" className="nav-item" aria-label="menu">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/booking" className="nav-item" aria-label="booking">
            Booking
          </Link>
        </li>
        <li>
          <Link to="/order" className="nav-item" aria-label="order">
            Order Online
          </Link>
        </li>
        <li>
          <Link to="/login" className="nav-item" aria-label="login">
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
