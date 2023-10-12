import React from "react";
import "./SideBar.css";
import LogoComponent from "../../components/logoComponent";

const Sidebar = ({ currentStep, steps }) => {
  return (
    <div className="sidebar">
      <div className="logo">
        <LogoComponent />
      </div>
      <ul>
        {steps.map((step, index) => (
          <li
            key={index}
            className={currentStep >= index ? "active" : "notActive"}
          >
            <div className="dot"></div>
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
