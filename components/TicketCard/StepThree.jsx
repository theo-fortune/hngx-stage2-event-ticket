/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";
import "./stepThree.css";
import html2canvas from "html2canvas";

const StepThree = ({
  onReset,
  name,
  email,
  specialRequest,
  avatar,
  ticketType,
  ticketQuantity,
}) => {
  const barcodeRef = useRef(null);
  const ticketRef = useRef(null);

  useEffect(() => {
    if (barcodeRef.current) {
      JsBarcode(barcodeRef.current, "TECHFEST25-12345", {
        // Replace with actual ticket ID
        format: "CODE128",
        lineColor: "#ffffff",
        width: 1.5,
        height: 40,
        displayValue: false,
        margin: 0,
      });
    }
  }, []);

  const handleDownload = async () => {
    if (!ticketRef.current) return;

    try {
      const canvas = await html2canvas(ticketRef.current, {
        useCORS: true, // Enable cross-origin images
        logging: true,
        scale: 2, // Higher resolution
      });

      const link = document.createElement("a");
      link.download = `TechFest-Ticket-${Date.now()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("Error generating ticket:", error);
      alert("Error downloading ticket. Please try again.");
    }
  };
  return (
    <>
      <svg width="0" height="0">
        <defs>
          <clipPath id="ticketClip">
            <path
              fillRule="evenodd"
              d="
              M0,0 H300 V600 H0 Z
              M0,0
                m20,0
                a20,20 0 1,0 -40,0
                a20,20 0 1,0 40,0
              M300,0
                m-20,0
                a20,20 0 1,0 40,0
                a20,20 0 1,0 -40,0
              M0,600
                m20,0
                a20,20 0 1,0 -40,0
                a20,20 0 1,0 40,0
              M300,600
                m-20,0
                a20,20 0 1,0 40,0
                a20,20 0 1,0 -40,0
            "
            />
          </clipPath>
        </defs>
      </svg>
      <figure className="step-three">
        <div className="step-three-header">
          <h1>Your Ticket is Booked!</h1>
          <p>
            Check your email for a copy or you can <b>download</b>
          </p>
        </div>
        <div className="step-three-ticket__container" ref={ticketRef}>
          <div className="step-three-ticket">
            <div className="step-three-ticket__body">
              <div className="step-three-ticket__body-header">
                <h1>Techember Fest ”25</h1>
                <div className="step-three-ticket__body-header_texts">
                  <p>📍 04 Rumens road, Ikoyi, Lagos</p>
                  <p>📅 March 15, 2025 | 7:00 PM</p>
                </div>
              </div>
              <div
                className="step-three-ticket__avatar"
                style={{
                  backgroundImage: `url(${avatar}?crossorigin=anonymous)`,
                }}
              ></div>
              <div className="step-three-ticket__details">
                <div className="step-three-ticket__details_name details-div">
                  <p>Enter your name</p>
                  <span>{name}</span>
                </div>
                <div className="step-three-ticket__details_email details-div">
                  <p>Enter your email *</p>
                  <span>{email}</span>
                </div>
                <div className="step-three-ticket__details_ticket-type details-div">
                  <p>Ticket Type:</p>
                  <span>{ticketType}</span>
                </div>
                <div className="step-three-ticket__details_ticket-for details-div">
                  <p>Ticket For:</p>
                  <span>{ticketQuantity}</span>
                </div>
                <div className="step-three-ticket__details_special-req details-div">
                  <p>Special request?</p>
                  <span>{specialRequest || "None"}</span>
                </div>
              </div>
            </div>
            <div className="step-three-ticket__divider"></div>
            <div className="step-three-ticket__bar-code">
              <img src="/images/BarCode.svg" alt="barcode" />
            </div>
          </div>
        </div>
        <div className="step-three__buttons">
          <button onClick={onReset}>Book Another Ticket</button>
          <button onClick={handleDownload}>Download Ticket</button>
        </div>
      </figure>
    </>
  );
};

export default StepThree;
