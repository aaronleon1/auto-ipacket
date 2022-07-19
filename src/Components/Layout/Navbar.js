import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/images/logo.png" alt="STARtUp" />
        </Link>

        <ul className="navbar-items">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/likes">Your STARs</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
