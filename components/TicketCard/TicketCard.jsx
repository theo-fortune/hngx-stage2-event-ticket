"use client"
import React, { useState } from "react";
import "./ticketCard.css";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const TicketCard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = 3;

  const handleNext = () => {
    if (currentStep < steps) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleReset = () => setCurrentStep(1);

  const getStepTitle = () => {
    const titles = {
      1: "Ticket Selection",
      2: "Attendee Details",
      3: "", // Empty title for step 3
    };
    return titles[currentStep];
  };

  return (
    <article className="ticket-card">
      <div className="ticket-card__heading">
        {currentStep !== 3 && (
          <div className="ticket-card__heading-top">
            <h1>{getStepTitle()}</h1>
            <p>
              Step {currentStep}/{steps}
            </p>
          </div>
        )}

        {currentStep !== 3 && (
          <div className="ticket-card__heading-progress">
            <div
              className="ticket-card__heading-progress-bar"
              style={{ width: `${((currentStep - 1) / (steps - 1)) * 100}%` }}
            ></div>
          </div>
        )}

        {currentStep === 1 && (
          <StepOne onNext={handleNext} onBack={handleBack} />
        )}
        {currentStep === 2 && (
          <StepTwo onNext={handleNext} onBack={handleBack} />
        )}
        {currentStep === 3 && <StepThree onReset={handleReset} />}
      </div>
    </article>
  );
};

export default TicketCard;
