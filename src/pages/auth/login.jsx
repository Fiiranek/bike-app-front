import React from "react";
import axios from "axios";
import { config } from "../../config";
import { useAuth } from "../../context/AuthContext";
function Login() {
  const { login } = useAuth();
  const loginHandler = async (e) => {
    e.preventDefault();
    const email = e.target["email"].value;
    const password = e.target["password"].value;
    const result = await login(email, password);
    console.log("RESULT", result);
    if (result) {
      alert("Logged in!");
      // setTimeout(() => {
      //   window.location.href = "/";
      // }, 2000);
    } else {
      alert("Cannot log in :(");
    }
  };
  return (
    <div>
      {" "}
      <form action="" className="auth-form" onSubmit={loginHandler}>
        <h2>Login</h2>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
          />
        </div>

        <button className="btn btn-auth">Login</button>
      </form>
    </div>
  );
}

export default Login;
