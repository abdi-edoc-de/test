import React from "react";
import "./formEnglish.css";
import IconWithText from "../components/iconWithText";
import TopRightButton from "../components/topRightButtons";
import LogoComponent from "../components/logoComponent";
import Copyright from "../components/copyRight";

function FormEnglish() {
  return (
    <div className="my-component">
      <div className="left-box">
        <LogoComponent />
        <div className="visa-text">
          Electronic <span className="green-text">Diversity visa</span> Entry
          Form
        </div>
        <div className="dream-text">
          Here you will fill all your information to reach your dream.
        </div>
        <IconWithText />
        <div className="line-and-text">
          <div className="straight-line"></div>
          <div className="lineText">
            This is a full copy of the official DV Lottery application form. Use
            it for training only. You will need to apply on the official website
            www.dvlottery.state.gov when it opens to take part in the lottery.
          </div>
        </div>
      </div>
      <div className="right-box">
        <TopRightButton />
        <div className="ready-text-button">
          <div className="ready-to-begin-text">Are you ready to begin?</div>
          <button className="start-button">Start</button>
        </div>
        <Copyright />
      </div>
    </div>
  );
}

export default FormEnglish;
