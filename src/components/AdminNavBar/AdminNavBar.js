import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminNavBar = () => {
  return (
    <>
      <div className="nav-bar-container">
        <Link to="/admin"> Home</Link>
        <Link to="about"> About</Link>
      </div>
      <Outlet />
    </>
  );
};

export default AdminNavBar;
