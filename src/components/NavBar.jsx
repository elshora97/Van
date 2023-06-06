import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header>
        <Link to="/" className="site-logo">
          #vanlife
        </Link>
        <nav className="page-links">
          <Link to="/host">host</Link>
          <br />
          <Link to="/about">about</Link>
          <br />
          <Link to="/vans">vans</Link>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
