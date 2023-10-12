import React from "react";
import { Row, Col, Divider } from "antd";
import Forms from "./Forms";
import { CheckOutlined, PlayCircleOutlined } from "@ant-design/icons";
import Nav from "./Nav";

function Home() {
  return (
    <div className="home-container">
      <Nav />
      <Row className="home-row">
        <Col span={12}>
          <Row style={{ fontSize: "40px" }}>
            <p style={{ color: "white", fontWeight: "bold" }}>
              <span style={{ color: "#4AC97D" }}> Win the right to live</span>{" "}
              <br /> in the USA!
            </p>
          </Row>
          <Row>
            <Col span={8}>
              <div
                style={{
                  display: "flex",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Divider
                  type="vertical"
                  style={{
                    height: "50%",
                    border: "2px solid white",
                    background: "black",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                />
                <p style={{ fontSize: "20px", color: "white" }}>
                  The official deadline is running, so hurry upand applyherel
                </p>
              </div>
            </Col>
            <Col span={15}>
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "space-around",
                  height: "150px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    background: "black",
                    width: "60px",
                    height: "60px",
                    color: "white",
                    borderRadius: "10px",
                    textAlign: "center",
                    fontSize: "20px",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    display: "flex",
                  }}
                >
                  <p>
                    27 <br /> <span style={{ fontSize: "9px" }}>DAYS</span>
                  </p>
                </div>
                <div
                  style={{
                    background: "black",
                    width: "60px",
                    height: "60px",
                    color: "white",
                    borderRadius: "10px",
                    textAlign: "center",
                    fontSize: "20px",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    display: "flex",
                  }}
                >
                  <p style={{ alignItems: "center" }}>
                    27 <br /> <span style={{ fontSize: "10px" }}>DAYS</span>
                  </p>
                </div>
                <div
                  style={{
                    background: "black",
                    width: "60px",
                    height: "60px",
                    color: "white",
                    borderRadius: "10px",
                    textAlign: "center",
                    fontSize: "20px",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    display: "flex",
                  }}
                >
                  <p style={{ alignItems: "center" }}>
                    27 <br /> <span style={{ fontSize: "10px" }}>DAYS</span>
                  </p>
                </div>
                <div
                  style={{
                    background: "black",
                    width: "60px",
                    height: "60px",
                    color: "white",
                    borderRadius: "10px",
                    textAlign: "center",
                    fontSize: "20px",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    display: "flex",
                  }}
                >
                  <p style={{ alignItems: "center" }}>
                    27 <br /> <span style={{ fontSize: "10px" }}>DAYS</span>
                  </p>
                </div>
              </div>
            </Col>
          </Row>{" "}
          <Row>
            <div style={{ display: "flex" }}>
              <PlayCircleOutlined style={{ color: "white" }} />
              <p
                style={{
                  paddingLeft: "10px",
                  color: "white",
                  fontSize: "12px",
                  margin: "7px 0",
                }}
              >
                50,000 people and their families will live, work and study in
                USA
              </p>
            </div>
          </Row>
          <Row>
            <div style={{ display: "flex" }}>
              <PlayCircleOutlined style={{ color: "white" }} />
              <p
                style={{
                  paddingLeft: "10px",
                  color: "white",
                  fontSize: "12px",
                  margin: "7px 0",
                }}
              >
                50,000 people and their families will live, work and study in
                USA
              </p>
            </div>
          </Row>
          <Row>
            <div style={{ display: "flex" }}>
              <PlayCircleOutlined style={{ color: "white" }} />
              <p
                style={{
                  paddingLeft: "10px",
                  color: "white",
                  fontSize: "12px",
                  margin: "7px 0",
                }}
              >
                50,000 people and their families will live, work and study in
                USA
              </p>
            </div>
          </Row>
          <Row>
            <div style={{ display: "flex" }}>
              <PlayCircleOutlined style={{ color: "white" }} />
              <p
                style={{
                  paddingLeft: "10px",
                  color: "white",
                  fontSize: "12px",
                  margin: "7px 0",
                }}
              >
                50,000 people and their families will live, work and study in
                USA
              </p>
            </div>
          </Row>
          <Row>
            <div style={{ display: "flex" }}>
              <PlayCircleOutlined style={{ color: "white" }} />
              <p
                style={{
                  paddingLeft: "10px",
                  color: "white",
                  fontSize: "12px",
                  margin: "7px 0",
                }}
              >
                50,000 people and their families will live, work and study in
                USA
              </p>
            </div>
          </Row>
          <Row>
            <div style={{ display: "flex" }}>
              <PlayCircleOutlined style={{ color: "white" }} />
              <p
                style={{
                  paddingLeft: "10px",
                  color: "white",
                  fontSize: "12px",
                  margin: "7px 0",
                }}
              >
                50,000 people and their families will live, work and study in
                USA
              </p>
            </div>
          </Row>
        </Col>
        <Col span={12}>
          <Forms></Forms>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
