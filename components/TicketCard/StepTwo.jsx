/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./stepTwo.css";

const StepTwo = ({onNext, onBack}) => {
  return (
    <figure className="step-two">
      <div className="step-two__upload">
        <p>Upload Profile Photo</p>
        <div className="step-two__upload-card">
          <button className="step-two__upload-card_upload">
            <img src="/images/cloud-download.svg" alt="cloud" />
            <p>Drag & drop or click to upload</p>
          </button>
        </div>
      </div>
      <hr className="step-divider" />
      <div className="name-input">
        <label>Enter your name</label>
        <input type="text" />
      </div>
      <div className="email-input">
        <label>Enter your email</label>
        <div className="email-input__input">
          <img src="/images/envelope.svg" alt="envelope" />
          <input type="text" placeholder="hello@avioflagos.io" />
        </div>
      </div>
      <div className="request-input">
        <label>Special request?</label>
        <textarea
          name="request"
          id="request"
          placeholder="Textarea"
          rows={7}
        ></textarea>
      </div>
      <div className="step-two__buttons">
        <button onClick={onBack}>Back</button>
        <button onClick={onNext}>Next</button>
      </div>
    </figure>
  );
};

export default StepTwo;
