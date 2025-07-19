import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../lib/api";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Login() {
   const [error, setError] = useState("");
  const [isloading, setIsLoading] = useState(false);
const { updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");

    try {

      const res = await api.post("/auth/login", {
        username,
        password,
      })
     updateUser(res.data);
      navigate("/"); // Redirect to home page after successful login
      // setSuccess(res.data.message);
      setError("");
      // console.log(res.data);
     
    } catch (error) {
      console.error("Error during registration:", error);
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message); // set error from backend
      } else {
        setError("Registration failed. Please try again.");
      }
     
    } finally {
      setIsLoading(false);
    }

    // console.log({username, email, password});
  };

  return (
    <div className="login">
      <div className="formContainer">
        <form action="/login" onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          {error && <span className="error-message">{error}</span>}
          <input name="username" required minLength={3} maxLength={20} type="text" placeholder="Username" />
          <input name="password" required minLength={5} type="password" placeholder="Password" />
          <button disabled={isloading}>{isloading ? "Logging in..." : "Login"}</button>
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;