import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      Contact component
      <h4>
        <Link to="1">Contact 1</Link>
      </h4>
      <h4>
        <Link to="2 ">Contact 2</Link>
      </h4>
      <h4>
        <Link to="3">Contact 3</Link>
      </h4>
      <Outlet />
    </div>
  );
};

export default Contact;
