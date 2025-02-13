import React from "react";
import "./ticketCard.css";
import StepOne from "./StepOne";

const TicketCard = () => {
  const currentStep = 1;
  const steps = 3;
  return (
    <article className="ticket-card">
      <div className="ticket-card__heading">
        <div className="ticket-card__heading-top">
          <h1>Ticket Selection</h1>
          <p>
            Step {currentStep}/{steps}
          </p>
        </div>
        <div className="ticket-card__heading-progress">
          <div className="ticket-card__heading-progress-bar"></div>
        </div>
        <StepOne />
      </div>
    </article>
  );
};

export default TicketCard;
