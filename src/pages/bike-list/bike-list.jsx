import React from "react";
import "./bike-list.css";
function BikeList() {
  const bikes = [
    {
      id: 1,
      brand: "Trek",
      model: "Madone",
      price: 10000,
      size: "M",
      available: true,
    },
    {
      id: 2,
      brand: "Cannondale",
      model: "SuperSix",
      price: 12000,
      size: "M",
      available: true,
    },
    {
      id: 3,
      brand: "Specialized",
      model: "Venge",
      price: 11000,
      size: "M",
      available: true,
    },
    {
      id: 1,
      brand: "Trek",
      model: "Madone",
      price: 10000,
      size: "M",
      available: true,
    },
    {
      id: 2,
      brand: "Cannondale",
      model: "SuperSix",
      price: 12000,
      size: "M",
      available: true,
    },
    {
      id: 3,
      brand: "Specialized",
      model: "Venge",
      price: 11000,
      size: "M",
      available: true,
    },
    {
      id: 1,
      brand: "Trek",
      model: "Madone",
      price: 10000,
      size: "M",
      available: true,
    },
    {
      id: 2,
      brand: "Cannondale",
      model: "SuperSix",
      price: 12000,
      size: "M",
      available: true,
    },
    {
      id: 3,
      brand: "Specialized",
      model: "Venge",
      price: 11000,
      size: "M",
      available: true,
    },
    {
      id: 1,
      brand: "Trek",
      model: "Madone",
      price: 10000,
      size: "M",
      available: true,
    },
    {
      id: 2,
      brand: "Cannondale",
      model: "SuperSix",
      price: 12000,
      size: "M",
      available: true,
    },
    {
      id: 3,
      brand: "Specialized",
      model: "Venge",
      price: 11000,
      size: "M",
      available: true,
    },
  ];
  return (
    <div className="bike-list">
      {bikes.map((bike, index) => {
        return (
          <div key={index} className="bike">
            <div>
              <img
                src="https://sprint-rowery.pl/media/catalog/product/cache/384791b6b20959df5b424e91f5ae26e1/r/o/rower-gorski-cannondale-scalpel-ht-carbon-3-czarnozolty-01.jpg"
                alt=""
              />
              <h3>
                {bike.brand} {bike.model}
              </h3>
              <p>Price: {bike.price}</p>
              <p>Size: {bike.size}</p>
              {/* <p>Available: {bike.available ? "Yes" : "No"}</p> */}
            </div>
            <button className="btn">Choose</button>
          </div>
        );
      })}
    </div>
  );
}

export default BikeList;
