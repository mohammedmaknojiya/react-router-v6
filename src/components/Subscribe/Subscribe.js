import React from "react";
import { useNavigate } from "react-router-dom";

const Subscribe = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>Subscribe page</h3>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default Subscribe;
