import { useContext, useState } from "react";
import "./login.css";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const { loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    console.log(credentials);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting credentials:", credentials);
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await axios.post(`/api/auth/login`, credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data.details });
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      dispatch({
        type: "LOGIN_FAILURE",
        payload: error.response?.data || "Something went wrong",
      });
    }
  };

  return (
    <div className="login-page">
      <div className="container">
        <form className="form">
          <h2 className="head">LOG IN</h2>
          <input
            type="text"
            placeholder="username"
            id="username"
            className="lInput"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            className="lInput"
            onChange={handleChange}
          />
          <button disabled={loading} onClick={handleSubmit} className="lButton">
            Log in
          </button>
          {error && (
            <span className="error">
              {error.message || "An error occurred during login"}
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
