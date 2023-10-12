import React from "react";

function IconWithText() {
    return (
        <div className="icon-with-text">
            <img
                src="/iconForward.png"
                alt="Icon Forward 10 Seconds"
                className="icon10Min"
            />
            <div className="text">10 minutes to finish</div>
        </div>
    );
}

export default IconWithText;
