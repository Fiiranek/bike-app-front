import React from "react";
import { PLAN_TYPES } from "../../enum";

function PlanTypes({ onSubmit, selectedType }) {
  return (
    <div className="order__comp">
      <h1>Choose plan type</h1>
      <div>
        {Object.keys(PLAN_TYPES).map((key, index) => {
          return (
            <button
              key={index}
              className={`btn ${
                selectedType === PLAN_TYPES[key] ? "btn__selected" : ""
              }`}
              onClick={() => onSubmit(PLAN_TYPES[key])}
            >
              {key.replace("_", " ").toLowerCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default PlanTypes;
