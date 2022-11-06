import React from "react";
import { PLAN_TYPES } from "../../enum";

function DatePick({ setDateStart, setDateEnd }) {
  return (
    <div className="order__comp">
      <h1>Choose date</h1>
      <div style={{ display: "flex" }}>
        <div className="input__date__group">
          <h2>Start date</h2>
          <input
            type="date"
            name=""
            id=""
            className="input"
            onChange={(e) => setDateStart(e.target.value)}
          />
        </div>
        <div className="input__date__group">
          <h2>End date</h2>
          <input
            type="date"
            name=""
            id=""
            className="input"
            onChange={(e) => setDateEnd(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default DatePick;
