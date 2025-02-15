"use client";
import React, { useEffect, useState } from "react";
import { set, get, del } from "idb-keyval";
import "./ticketCard.css";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const TicketCard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    specialRequest: "",
    avatar: "/images/default-avatar.png",
    ticketType: "Regular Access",
    ticketQuantity: 1,
  });

  useEffect(() => {
    const loadSavedData = async () => {
      try {
        const savedData = await get("ticketFormData");
        if (savedData) {
          setFormData(savedData);
          setCurrentStep(savedData.currentStep || 1);
        }
      } catch (error) {
        console.error("Error loading saved data:", error);
      }
    };
    loadSavedData();
  }, []);

  useEffect(() => {
    const saveData = async () => {
      try {
        await set("ticketFormData", { ...formData, currentStep });
      } catch (error) {
        console.error("Error saving data:", error);
      }
    };
    saveData();
  }, [formData, currentStep]);

  const updateFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const steps = 3;

  const handleNext = () => {
    if (currentStep < steps) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleReset = async () => {
    setCurrentStep(1);
    setFormData({
      name: "",
      email: "",
      specialRequest: "",
      avatar: "",
      ticketType: "Regular Access",
      ticketQuantity: 1,
    });
    try {
      await del("ticketFormData");
    } catch (error) {
      console.error("Error clearing data:", error);
    }
  };

  const getStepTitle = () => {
    const titles = {
      1: "Ticket Selection",
      2: "Attendee Details",
      3: "Ready",
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
          <StepOne
            onNext={handleNext}
            onBack={handleBack}
            updateFormData={updateFormData}
          />
        )}
        {currentStep === 2 && (
          <StepTwo
            onNext={handleNext}
            onBack={handleBack}
            formData={formData}
            updateFormData={updateFormData}
          />
        )}
        {currentStep === 3 && <StepThree {...formData} onReset={handleReset} />}
      </div>
    </article>
  );
};

export default TicketCard;
