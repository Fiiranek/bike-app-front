import React, { useEffect, useState } from "react";
import "./bike-list.css";
import axios from "axios";
import { config } from "../../config";
import { TRAINING_TYPES } from "../../enum";
function TrainingList({ planType, dateStart, dateEnd, bikeSize }) {
  const [trainings, setTrainings] = useState([
    {
      id: 2,
      name: "personal_begginer",
      type: "PERSONAL",
      dateStart: "2023-08-05",
      dateEnd: "2023-08-05",
      duration: null,
      price: 119.99,
    },
    {
      id: 3,
      name: "personal_begginer",
      type: "PERSONAL",
      dateStart: "2023-01-16",
      dateEnd: "2023-01-15",
      duration: null,
      price: 119.99,
    },
  ]);

  const getTrainings = async () => {
    console.log({
      dateStart: dateStart,
      dateEnd: dateEnd,
      size: bikeSize,
    });
    const res = await axios.get(`${config.API_URL}/date-training`, {
      params: {
        dateStart: dateStart,
        dateEnd: dateEnd,
        type: Object.keys(TRAINING_TYPES).filter(
          (T) => TRAINING_TYPES[T] === planType
        )[0],
      },
    });
    console.log(res);
    // setTrainings(res);
  };

  useEffect(() => getTrainings(), []);

  return (
    <div className="bike-list">
      {trainings.map((training, index) => {
        return (
          <div key={index} className="bike">
            <div>
              <img
                src="https://img.redbull.com/images/c_crop,w_7245,h_3622,x_0,y_594,f_auto,q_auto/c_scale,w_1200/redbullcom/2017/12/28/3b1ee7fd-c240-4a2d-814f-9045e1d972af/cycling-training-road-biking"
                alt=""
              />
              <h3>
                {training.name} {training.type}
              </h3>
              <p>Price: {training.price}</p>
              <p>Duration: {training.duration}</p>
              {/* <p>Available: {bike.available ? "Yes" : "No"}</p> */}
            </div>
            <button className="btn" onClick={() => {}}>
              Choose
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TrainingList;
