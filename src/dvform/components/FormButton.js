import React from "react";
import "./FormButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const FormButton = () => {
  return (
    <button className="form-button">
      OK <FontAwesomeIcon icon={faCheck} className="tick-icon" />
    </button>
  );
};

export default FormButton;
