import React from "react";

function PickButtons({ arr }) {
  return arr.map((item, index) => {
    return (
      <button key={index} className={arr.selected}>
        {item.name}
      </button>
    );
  });
}

export default PickButtons;
