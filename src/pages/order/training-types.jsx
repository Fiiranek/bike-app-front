import React from "react";
import { TRAINING_TYPES } from "../../enum";

function TrainingTypes({ onSubmit, selectedType }) {
  return (
    <div className="order__comp">
      <h1>Choose training type</h1>
      <div>
        {Object.keys(TRAINING_TYPES).map((key, index) => {
          return (
            <button
              key={index}
              className={`btn ${
                selectedType === TRAINING_TYPES[key] ? "btn__selected" : ""
              }`}
              onClick={() => onSubmit(TRAINING_TYPES[key])}
            >
              {key.replace("_", " ").toLowerCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TrainingTypes;
