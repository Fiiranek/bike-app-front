import React from "react";
import { BIKE_SIZES } from "../../enum";

function BikeSizes({ onSubmit, selectedType }) {
  return (
    <div className="order__comp">
      <h1>Choose bike size</h1>
      <div>
        {Object.keys(BIKE_SIZES).map((key, index) => {
          return (
            <button
              key={index}
              className={`btn ${
                selectedType === BIKE_SIZES[key] ? "btn__selected" : ""
              }`}
              onClick={() => onSubmit(BIKE_SIZES[key])}
            >
              {key.replace("_", " ").toLowerCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default BikeSizes;
