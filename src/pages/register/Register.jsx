import api from "../../lib/api";
import { useState } from "react";
import "./register.scss";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("");
const [isloading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {

      const res = await api.post("auth/register", {
        username,
        email,
        password,
      })
      setSuccess(res.data.message);
      setError("");
      console.log(res.data);
      navigate("/login"); // Redirect to login page after successful registration
    } catch (error) {
      console.error("Error during registration:", error);
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message); // set error from backend
      } else {
        setError("Registration failed. Please try again.");
      }
      setSuccess("");
    } finally {
      setIsLoading(false);
    }


    // console.log({username, email, password});
  };

  return (
    <div className="register">
      <div className="formContainer">
        <form action="/register" onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          {error && <span className="error-message">{error}</span>}
          {success && <div className="success-message">registration sucessful!!</div>}
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button disabled={isloading}>{isloading ? "Registering..." : "Register"}</button>
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="image of apartments" />
      </div>
    </div>
  );
}

export default Register;