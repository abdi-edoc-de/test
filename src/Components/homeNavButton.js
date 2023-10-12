import React from "react";
import "../pages/formEnglish";

function HomeNavButton() {
  return (
    <div className="buttons-container">
      <div
        className="button english-button"
        style={{
          color: "white",
        }}
      >
        🇺🇸
        <div
          style={{
            color: "white",
          }}
          className="button-text"
        >
          English
          <img
            style={{ color: "white" }}
            src="/downIcon.png"
            alt="Down Icon"
            className="icon"
          />
        </div>
      </div>
      <div
        style={{
          color: "white",
          border: " 1px solid white",
        }}
        className="button live-chat-button"
      >
        LiveChat
      </div>
    </div>
  );
}

export default HomeNavButton
;
