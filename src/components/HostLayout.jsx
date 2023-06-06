import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  return (
    <>
      <nav className="host-nav">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to="/host"
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to="/host/income"
        >
          Income
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to="/host/Vans"
        >
          Vans
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to="/host/reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
