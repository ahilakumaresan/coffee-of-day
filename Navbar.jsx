import React from "react";
import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">

        {/* Brand */}
        <Link 
          to="/" 
          className="navbar-brand fw-bold text-white text-decoration-none"
        >
          ☕ Coffee of the Day
        </Link>

        <ul className="navbar-nav ms-auto align-items-center">

          <li className="nav-item">
            <Link className="nav-link" to="/menu">
              Menu
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/checkout">
              Cart
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/orders">
              Orders
            </Link>
          </li>

          <li className="nav-item ms-3">
            <button
              className="btn btn-outline-light btn-sm"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "☀ Light" : "🌙 Dark"}
            </button>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;