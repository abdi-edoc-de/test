import logo from "./logo.svg";
import Review from "./pages/review";
import FormSlider from "./pages/formSlider";
import React from "react";
import { Row, Col } from "antd";
import Home from "./components/Home";
import Cost from "./pages/Cost";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import Footer from "./pages/footer";
import FormEnglish from "./pages/formEnglish";
import English from "./pages/english";
function App() {
  return (
    <>
     

      <Routes>
        <Route path="form" element={<FormSlider />} />
        <Route path="entry" element={<English />} />
        <Route
          path="/"
          index
          element={
            <div>
              <Home />
              <Cost />
              <Review />
              <Contact />
              <Footer />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
