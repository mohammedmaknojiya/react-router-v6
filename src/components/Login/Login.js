import React, { useState } from "react";
import { useAuth } from "../../utils/Auth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state ? location.state.path : "/";

  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };
  return (
    <div>
      <input type="text" onChange={(e) => setUser(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
