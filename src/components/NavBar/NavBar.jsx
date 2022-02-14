import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="container-navBar">
      <div className="logo">SERVICES-PHONE</div>
      <ul className="container-navLink">
        <li>
          <NavLink to={"/"} className="navLink">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to={"/create"} className="navLink">
            Create service
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export { NavBar };
