import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="navbar-brand">
          Logo
        </a>
        <ul
          className="navbar-nav"
          style={{ display: "flex", direction: "row" }}
        >
          <li className="nav-item">
            <Link to="/" className="nav-link text-warning">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link text-warning">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link text-warning">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link text-warning">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
