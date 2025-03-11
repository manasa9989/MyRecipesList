import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">My Kitchen Recipe List</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/myrecipes">MyRecipes</Link>
      </div>
    </nav>
  );
};

export default Header;

