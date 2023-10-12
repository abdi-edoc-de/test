import { Row, Col, Divider, Input, Button } from "antd";
import React from "react";
import { RightOutlined, PlayCircleOutlined } from "@ant-design/icons";

function Contact() {
  return (
    <div>
      <div
        style={{
          margin: "0 5%",
        }}
      >
        <Divider
          style={{ width: "100%", border: "0.7px solid #dbdbdb" }}
        ></Divider>
        <p style={{ fontSize: "40px", color: "#4ac97d" }}>
          {" "}
          Let's Keep in touch for news
        </p>
        <div
          style={{
            width: "100%",
            height: "100px",
            background: "#F7F8F9",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Divider
            type="vertical"
            style={{
              height: "100%",
              border: "4px solid #00579B",
              borderRadius: "5px 0 0 5px",
            }}
          />
          <p
            style={{
              fontSize: "20px",
              width: "45%",
              margin: "0 2%",
              alignItems: "center",
            }}
          >
            Subscribe to be the first do receive updates and be in advantage on
            your application process{" "}
          </p>
          <Input
            style={{
              width: "40%",
              borderRadius: "12px",
              background: "white",
              border: "none",
              height: "50px",
            }}
            placeholder="Your email here"
            suffix={
              <Button
                style={{
                  border: "none",
                  color: "white",
                  background: "#fd816b",
                  fontSize: "10px",
                  borderRadius: "30px",
                }}
                icon={<RightOutlined />}
              >
                {" "}
                Subscribe
              </Button>
            }
            disabled
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
