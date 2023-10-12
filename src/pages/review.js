import React from "react";
import "./review.css";

function Review() {
    return (
        <div className="my-review-component">
            <div className="first-box">
                <div className="icon-and-text">
                    <div className="staricon">
                        <img
                            src="/star.png"
                            alt="Start Icon"
                            style={{
                                width: "34.57px",
                                height: "26.48px",
                                top: "2459.99px",
                                left: "83px",
                            }}
                        />
                    </div>
                    <div className="star-text">
                        Our Jobs Speak for Ourselves
                    </div>
                </div>
                <div className="profile-component">
                    <img
                        src="/profile.png" // Set the path to your profile image
                        alt="Profile"
                        className="profile-image"
                    />
                    <div className="profileDetail">
                        <div className="name">Yeonseo Choi</div>
                        <div className="column">
                            <div className="column-text">1 Review</div>
                            <div className="column-icon">
                                <img
                                    src="/location.png" // Set the path to your icon file
                                    alt="Column Icon"
                                    className="column-icon-image"
                                />
                            </div>
                            <div className="column-text">KR</div>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="text-date">Mar 20, 2023</div>
                <div className="star-icons">
                    <img
                        src="/starGreen.png" // Set the path to your star icon image
                        alt="Star Icon"
                        className="star-icon"
                    />
                    <img
                        src="/starGreen.png"
                        alt="Star Icon"
                        className="star-icon"
                    />
                    <img
                        src="/starGreen.png"
                        alt="Star Icon"
                        className="star-icon"
                    />
                    <img
                        src="/starGreen.png"
                        alt="Star Icon"
                        className="star-icon"
                    />
                    <img
                        src="/starGreen.png"
                        alt="Star Icon"
                        className="star-icon"
                    />
                </div>
                <div className="recommend-text">Highly Recommend</div>
                <div className="review-text">
                    Nikka was a very professional consultant, always ready to
                    assist us each step of the way. I was reminded of everything
                    I had to take with me to the interview and also later to
                    pick up my passport and my son's. Thanks once more; I
                    certainly recommend the service.
                </div>
                <div className="date-of-experience">
                    Date of experience: February 28, 2023
                </div>
                <div className="nav-icons-container">
                    <img src="/left.png" alt="Left Icon" className="navicone" />
                    <img
                        src="/right.png"
                        alt="Right Icon"
                        className="navicone"
                    />
                </div>
            </div>
            <div className="second-box">
                <img
                    src="/trustpilot.png"
                    alt="TrustPilot Logo"
                    className="trustpilot-image"
                />
                <img
                    src="/personMessage.png"
                    alt="Person Message Image"
                    className="person-message-image"
                />
            </div>
        </div>
    );
}

export default Review;
