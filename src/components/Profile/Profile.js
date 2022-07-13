import React from "react";
import { useAuth } from "../../utils/Auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <div>
      <h3>Profile Page</h3>
      <h5>Welcome : {auth.user}</h5>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
