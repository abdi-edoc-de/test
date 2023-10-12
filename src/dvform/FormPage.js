import React, { useState } from "react";
import Sidebar from "./components/SideBar";
import PhoneNumberInput from "./components/PhoneNumberInput";
import "./FormPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import FormButton from "./components/FormButton";

const steps = [
  "Name",
  "Contact Information",
  "Gender",
  "Birth Information",
  "Country of Eligibility",
  "Photograph",
  "Mailing Address",
  "Additional Information",
  "Payment",
];

function FormPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="form-page">
      <Sidebar currentStep={currentStep} steps={steps} />
      <div className="form-body">
        <h1 className="form-title">2.1. - {steps[currentStep]}</h1>
        <PhoneNumberInput />
        <FormButton />
      </div>
      <div className="form-controls">
        <div className="control-container">
          <button onClick={handlePrevStep} className="arrow-button arrow-up">
            <FontAwesomeIcon icon={faChevronUp} className="arrow-icon" />
          </button>
          <button onClick={handleNextStep} className="arrow-button arrow-down">
            <FontAwesomeIcon icon={faChevronDown} className="arrow-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
