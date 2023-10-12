import React from "react";

function TopRightButton() {
    return (
        <div className="buttons-container">
            <div className="button english-button">
                <img src="/flag.png" alt="USA Flag" className="flag-logo" />
                <div className="button-text">
                    English
                    <img src="/downIcon.png" alt="Down Icon" className="icon" />
                </div>
            </div>
            <div className="button live-chat-button">LiveChat</div>
        </div>
    );
}

export default TopRightButton;
