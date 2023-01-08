import React from "react";
import "./auth.css";
import axios from "axios";
import { config } from "../../config";
import { useAuth } from "../../context/AuthContext";
function Register() {
  const { register } = useAuth();
  const registerHandler = async (e) => {
    e.preventDefault();
    const email = e.target["email"].value;
    const password = e.target["password"].value;
    const surname = e.target["surname"].value;
    const name = e.target["name"].value;
    const address = e.target["address"].value;
    const telNumber = e.target["telNumber"].value;

    const data = {
      email,
      password,
      surname,
      name,
      address,
      telNumber,
    };
    console.log(data);
    const result = await register(data);
    alert(result);
  };
  return (
    <div>
      <form action="" className="auth-form" onSubmit={registerHandler}>
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="name">Surname</label>
          <input
            type="text"
            name="surname"
            id="surname"
            className="form-control"
          />
        </div>

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

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="address"
            name="address"
            id="address"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="telNumber">Telephone Number</label>
          <input
            type="tel"
            name="telNumber"
            id="telNumber"
            className="form-control"
          />
        </div>

        <button className="btn btn-auth">Register</button>
      </form>
    </div>
  );
}

export default Register;
