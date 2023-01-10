import React, { useState } from "react";
import BikeList from "../list/bike-list";
import TrainingList from "../list/training-list";
import BikeSizes from "./bike-sizes";
import DatePick from "./date-pick";
import "./order.css";
import PlanTypes from "./plan-types";
import TrainingTypes from "./training-types";
function Order() {
  const [planType, setPlanType] = useState(undefined);
  const [action, setAction] = useState(0);
  const [dateStart, setDateStart] = useState(undefined);
  const [dateEnd, setDateEnd] = useState(undefined);
  const [bikeSize, setBikeSize] = useState(undefined);
  const [trainingType, setTrainingType] = useState(undefined);
  const [trainingDateStart, setTrainingDateStart] = useState(undefined);
  const [trainingDateEnd, setTrainingDateEnd] = useState(undefined);
  const [bikeId, setBikeId] = useState(undefined);
  const components = [
    <PlanTypes onSubmit={setPlanType} selectedType={planType} />,
    <DatePick setDateStart={setDateStart} setDateEnd={setDateEnd} />,
    <BikeSizes onSubmit={setBikeSize} selectedType={bikeSize} />,
    <BikeList
      planType={planType}
      dateStart={dateStart}
      dateEnd={dateEnd}
      bikeSize={bikeSize}
      bikeId={bikeId}
      setBikeId={setBikeId}
    />,
    <TrainingTypes onSubmit={setTrainingType} selectedType={trainingType} />,
    <DatePick
      setDateStart={setTrainingDateStart}
      setDateEnd={setTrainingDateEnd}
    />,
    <TrainingList
      planType={planType}
      dateStart={dateStart}
      dateEnd={dateEnd}
      bikeSize={bikeSize}
    />,
  ];

  return (
    <div className="order">
      <div className="order__top">
        <h1>Create an order</h1>
        <h1>Step {action + 1}</h1>
      </div>
      {components[action]}

      <div className="btns">
        <>
          <button
            className="btn"
            onClick={() => {
              setAction(action - 1);
            }}
          >
            Back
          </button>
          {action !== 3 && <button className="btn">Skip this step</button>}
          <button
            className="btn"
            onClick={() => {
              setAction(action + 1);
            }}
          >
            Next
          </button>
        </>
      </div>
    </div>
  );
}

export default Order;
