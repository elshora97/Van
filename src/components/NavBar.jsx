import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header>
        <Link to="/" className="site-logo">
          #vanlife
        </Link>
        <nav className="page-links">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : null)}
            to="/host"
          >
            host
          </NavLink>
          <br />
          <NavLink
            className={({ isActive }) => (isActive ? "active" : null)}
            to="/about"
          >
            about
          </NavLink>
          <br />
          <NavLink
            className={({ isActive }) => (isActive ? "active" : null)}
            to="/vans"
          >
            vans
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
