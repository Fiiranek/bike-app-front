import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useAuth } from "../../context/AuthContext";
function Navbar() {
  const { accessToken, logout } = useAuth();
  return (
    <nav className="nav">
      <div className="nav-logo">
        <span>Logo</span>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        {accessToken && (
          <>
            {" "}
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/register" className="nav-link">
              Register
            </Link>
            <Link to="/account-confirmation" className="nav-link">
              Confirm account
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
