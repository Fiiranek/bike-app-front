import React from "react";
import axios from "axios";
import { config } from "../../config";

function Login() {
  const loginHandler = async (e) => {
    e.preventDefault();
    const email = e.target["email"].value;
    const password = e.target["password"].value;
    const requestConfig = {
      headers: {
        "X-AUTH-EMAIL": email,
        "X-AUTH-PASSWORD": password,
      },
    };

    try {
      const res = await axios.post(
        `${config.API_URL}/login`,
        {},
        requestConfig
      );
      console.log(res);
    } catch (err) {
      console.log(err);
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

        <button className="btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
