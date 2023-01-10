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
      if (res.status === 200) {
        alert("Account activated!");
        // setTimeout(() => {
        //   window.location.href = "/login";
        // }, 2000);
      } else {
        alert("Something went wrong while activating account :(");
      }
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

        <button className="btn btn-auth">Confirm</button>
      </form>
    </div>
  );
}

export default AccountConfirmation;
