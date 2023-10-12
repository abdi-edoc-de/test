import logo from "./logo.svg";
import Review from "./pages/review";
import FormSlider from "./pages/formSlider";
import React from "react";
import { Row, Col } from "antd";
import Home from "./Components/Home";
import Cost from "./Pages/Cost";
import Contact from "./Pages/Contact";
function App() {
  return (
    <>
      <Home />
      <Cost />
      <Contact />
      <Review />
      <FormSlider />
    </>
  );
}

export default App;
