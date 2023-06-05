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
          <Link to="/">home</Link>
          <br />
          <Link to="/about">about</Link>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
