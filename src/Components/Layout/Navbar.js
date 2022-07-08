import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <img src="/images/logo.png" alt="STARtUp" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/likes">View Likes</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
