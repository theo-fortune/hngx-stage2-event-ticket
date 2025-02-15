/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useRef } from "react";
import "./stepTwo.css";

const StepTwo = ({ onNext, onBack, formData, updateFormData }) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const cloudName = "dxu5abgqw";
  const uploadPreset = "avatar_upload";

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.avatar) newErrors.avatar = "Avatar is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      onNext();
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) throw new Error("Upload failed");

      const data = await response.json();
      updateFormData({
        avatar: data.secure_url + "?crossorigin=anonymous",
      });
      setUploadedImage(data.secure_url);
    } catch (error) {
      console.error("Upload error:", error);
      alert("Image upload failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <figure className="step-two">
      <div className="step-two__upload">
        <p>Upload Profile Photo</p>
        <div className="step-two__upload-card">
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />
          <button
            className={`step-two__upload-card_upload ${
              uploadedImage ? "has-image" : ""
            }`}
            onClick={handleUploadClick}
            disabled={isUploading}
            style={{
              backgroundImage: uploadedImage ? `url(${uploadedImage})` : "none",
            }}
          >
            {!uploadedImage && (
              <div className="upload-content">
                <img src="/images/cloud-download.svg" alt="cloud" />
                <p>
                  {isUploading
                    ? "Uploading..."
                    : "Drag & drop or click to upload"}
                </p>
              </div>
            )}
          </button>
        </div>
      </div>

      <hr className="step-divider" />

      <div className="name-input">
        <label>Enter your name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => updateFormData({ name: e.target.value })}
          required
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div className="email-input">
        <label>Enter your email</label>
        <div className="email-input__input">
          <img src="/images/envelope.svg" alt="envelope" />
          <input
            type="email"
            value={formData.email}
            onChange={(e) => updateFormData({ email: e.target.value })}
            placeholder="hello@avioflagos.io"
            required
          />
        </div>
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div className="request-input">
        <label>Special request?</label>
        <textarea
          value={formData.specialRequest}
          onChange={(e) => updateFormData({ specialRequest: e.target.value })}
          rows={7}
        ></textarea>
      </div>

      <div className="step-two__buttons">
        <button onClick={onBack}>Back</button>
        <button onClick={handleNext} disabled={isUploading}>
          Next
        </button>
      </div>
    </figure>
  );
};

export default StepTwo;
