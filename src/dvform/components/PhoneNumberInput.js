import React, { useState } from "react";
import "./PhoneNumberInput.css";

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("+1 604 123 4567");

  // A map of country codes and their respective flags
  const countryFlags = {
    us: "🇺🇸",
    ca: "🇨🦁",
    gb: "🇬🇧",
    fr: "🇫🇷",
    de: "🇩🇪",
    cn: "🇨🇳",
    jp: "🇯🇵",
    kr: "🇰🇷",
    in: "🇮🇳",
    br: "🇧🇷",
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div className="phone-input-container">
      <div className="flag-dropdown">
        <select>
          {Object.keys(countryFlags).map((countryCode) => (
            <option key={countryCode} value={countryCode}>
              {countryFlags[countryCode]}
            </option>
          ))}
        </select>
      </div>
      <div className="separator">|</div>
      <div className="input-wrapper">
        <input
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          placeholder="Phone Number"
          className={
            phoneNumber === "+1 604 123 4567"
              ? "phone-input default-text"
              : "phone-input"
          }
        />
      </div>
    </div>
  );
};

export default PhoneNumberInput;
