import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const activeUsers = searchParams.get("filter") === "active";
  return (
    <div>
      <h3>About component</h3>
      <button onClick={() => navigate("/subscribe")}>
        {/**we added / because we want url to be localhost:3000/subscribe and not localhost:3000/about/subscribe */}
        Go to subscribe page
      </button>
      <button onClick={() => navigate("/subscribe", { replace: true })}>
        Go to subscribe page without back
      </button>

      <br />
      <br />
      <div>
        <h3> For selecting different filters and applying them in url</h3>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Show Active users
        </button>
        <button onClick={() => setSearchParams({})}>Reset filter</button>
      </div>

      {activeUsers ? (
        <div>List of active users</div>
      ) : (
        <div>List of all users</div>
      )}
    </div>
  );
};

export default About;
