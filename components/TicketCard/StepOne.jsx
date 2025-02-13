import React from "react";
import "./stepOne.css";

const ButtonsClick = ({ price, type, access }) => {
  return (
    <button className="step-one__button">
      <h3>{price}</h3>
      <div className="step-one__button-type">
        <p>{type}</p>
        <span>{access}</span>
      </div>
    </button>
  );
};
const StepOne = () => {
  return (
    <figure className="step-one">
      <div className="step-one__heading">
        <div className="step-one__heading-head">
          <h1>Techember Fest ”25</h1>
          <p>
            Join us for an unforgettable experience at TechFusion! Secure your
            spot now.
          </p>
        </div>
        <div className="step-one__heading-head_info">
          <p>📍 Lagos, Nigeria</p>
          <p>||</p>
          <p>March 15, 2025 | 7:00 PM</p>
        </div>
      </div>
      <hr className="step-one__divider" />
      <div className="step-one__type">
        <p>Select Ticket Type:</p>
        <div className="step-one__type-buttons">
          <ButtonsClick
            price={"Free"}
            type={"Regular Access"}
            access={"20/52"}
          />
          <ButtonsClick price={"$150"} type={"VIP Access"} access={"20/52"} />
          <ButtonsClick price={"$200"} type={"VVIP"} access={"20/52"} />
        </div>
      </div>
    </figure>
  );
};

export default StepOne;
