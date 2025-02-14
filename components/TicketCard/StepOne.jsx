"use client";
import React, { useState } from "react";
import "./stepOne.css";

const ButtonsClick = ({ price, type, access, selected, onClick }) => {
  return (
    <button
      className={`step-one__button ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      <h3>{price}</h3>
      <div className="step-one__button-type">
        <p>{type}</p>
        <span>{access}</span>
      </div>
    </button>
  );
};

const StepOne = ({onNext, onBack}) => {
  const [selectedButton, setSelectedButton] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(1);

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
      <hr className="step-one__divider step-divider" />
      <div className="step-one__type">
        <p>Select Ticket Type:</p>
        <div className="step-one__type-buttons">
          <ButtonsClick
            price={"Free"}
            type={"Regular Access"}
            access={"20/52"}
            selected={selectedButton === 0}
            onClick={() => setSelectedButton(0)}
          />
          <ButtonsClick
            price={"$150"}
            type={"VIP Access"}
            access={"20/52"}
            selected={selectedButton === 1}
            onClick={() => setSelectedButton(1)}
          />
          <ButtonsClick
            price={"$200"}
            type={"VVIP"}
            access={"20/52"}
            selected={selectedButton === 2}
            onClick={() => setSelectedButton(2)}
          />
        </div>
      </div>
      <div className="step-one__number">
        <p>Number of Tickets</p>
        <div className="step-one__number-dropdown">
          <select
            value={selectedNumber}
            onChange={(e) => setSelectedNumber(Number(e.target.value))}
            className="number-select"
          >
            {[1, 2, 3, 4].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="step-one__buttons">
        <button onClick={onBack}>Cancel</button>
        <button onClick={onNext}>Next</button>
      </div>
    </figure>
  );
};

export default StepOne;
