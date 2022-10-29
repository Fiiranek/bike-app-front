import React from "react";
import axios from "axios";
import { config } from "../../config";

function AccountConfirmation() {
  const confirmHandler = async (e) => {
    e.preventDefault();
    const key = e.target["key"].value;

    try {
      const res = await axios.get(
        `${config.API_URL}/account-confirmation/${key}`
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {" "}
      <form action="" className="auth-form" onSubmit={confirmHandler}>
        <h2>Account confirmation</h2>

        <div className="form-group">
          <label htmlFor="email">Code</label>
          <input type="text" name="key" id="key" className="form-control" />
        </div>

        <button className="btn">Confirm</button>
      </form>
    </div>
  );
}

export default AccountConfirmation;
