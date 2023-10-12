import { Row, Col, Divider, Input, Button } from "antd";
import React from "react";
import { RightOutlined, PlayCircleOutlined } from "@ant-design/icons";

function Nav() {
  return (
    <div
      style={{
        margin: "0 5% 2% 5%",
        paddingTop: "2%",
      }}
    >
      <div
        style={{
          background: "#1F3655",
          borderRadius: "20px",
        }}
      >
        <div>
          <img style={{ marginLeft: "30px" }} src="logo.png"></img>
        </div>
      </div>
    </div>
  );
}

export default Nav;
