import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./page-css/adminLogin.css";
import axios from "axios";
const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async(e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
    try{
      const response = await axios.post("http://localhost:3000/login", { username: email, password: password },{withCredentials:true});
      console.log(response.status);
      if(response.status==200){
          navigate("/secret-admHome");
      }
    }catch(err){
        console.log("Error logging in :-"+err)
    }
    
    };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h1 className="login-title">Login</h1>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
          name="username"
          required
        />
        <label htmlFor="email">password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          name="password"
          required
        />
        <button type="submit" className="login-button">
          Login
        </button>
         <p className="login-text">
        Don't have an account?{" "}
        <span className="login-link" onClick={goToRegister}>
          Register here
        </span>
      </p>
      </form>
     
    </div>
  );
};

export default AdminLogin;
