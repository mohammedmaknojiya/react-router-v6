import React from "react";
import { Link, Outlet } from "react-router-dom";

const Tab2 = () => {
  return (
    <div>
      <h3>Tab2 Content</h3>
      <div className="nav-bar-container">
        <Link to="itab1"> Internal Tab1</Link>
        <Link to="itab2"> Internal Tab2</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Tab2;
