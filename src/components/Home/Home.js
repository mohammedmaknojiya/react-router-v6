import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Component</h1>
      <div className="nav-bar-container">
        <Link to="tab1"> Tab1</Link>
        <Link to="tab2"> Tab2</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
