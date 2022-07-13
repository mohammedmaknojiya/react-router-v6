import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../utils/Auth";

import "./style.scss";

const NavBar = () => {
  const auth = useAuth();

  return (
    <>
      <div className="nav-bar-container">
        <Link to="/"> Home</Link>
        <Link to="/about"> About</Link>
        <Link to="/contact"> Contact</Link>
        <Link to="/profile">Profile</Link>
        {!auth.user && <Link to="/login">Login</Link>}
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
