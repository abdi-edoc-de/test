import React from "react";
import "./SideBar.css";
const Sidebar = ({ currentStep, steps }) => {
  return (
    <div className="sidebar">
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
