import React, { useState } from "react";
import Sidebar from "../FormSlider/components/SideBar";
import PhoneNumberInput from "../FormSlider/components/PhoneNumberInput";
import "./formSlider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import FormButton from "../FormSlider/components/FormButton";
import Copyright from "../components/copyRight";
import TopRightButton from "../components/topRightButtons";

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

function FormSlider() {
  const [currentStep, setCurrentStep] = useState(1);

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
    <div className="form-page" style={{ background: "white" }}>
      <Sidebar currentStep={currentStep} steps={steps} />
      <div className="form-body" style={{ background: "white" }}>
        <div className="top-right-form">
          <TopRightButton />
        </div>
        <h1 className="form-title">2.1. - Phone number</h1>
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
        <Copyright />
      </div>
    </div>
  );
}

export default FormSlider;
