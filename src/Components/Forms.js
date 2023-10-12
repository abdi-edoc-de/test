import React from "react";
import { Row, Col, Form, Input, Select, Checkbox, Button } from "antd";
import { CheckOutlined, ArrowRightOutlined } from "@ant-design/icons";
import "../static/style.css";
function Forms() {
  return (
    <div
      style={{
        padding: "30px",
        background: "white",
        borderRadius: "20px",
      }}
    >
      <Form>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#4AC97D",
            fontSize: "18px",
          }}
        >
          <ArrowRightOutlined style={{ paddingRight: "20px", margin: "0" }} />
          <p style={{ margin: "0" }}> Check now for free!</p>
        </div>

        <p style={{ margin: "0", fontSize: "54px", fontWeight: "bolder" }}>
          {" "}
          Grren Card Eligibility{" "}
        </p>

        <Row>
          <Col span={12}>
            <Form.Item
              placeholder="First Name"
              style={{ marginRight: "7.5px" }}
            >
              <Input
                placeholder="First Name"
                style={{ background: "#D3D3D3" }}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item style={{ marginLeft: "7.5px" }}>
              <Input
                style={{ background: "#D3D3D3" }}
                placeholder="Last Name"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item style={{ marginRight: "7.5px" }}>
              <Input
                placeholder="Email address"
                style={{ background: "#D3D3D3" }}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item style={{ marginLeft: "7.5px" }}>
              <Input
                placeholder="your email again"
                style={{ background: "#D3D3D3" }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Form.Item style={{ width: "100%" }}>
            <Select
              placeholder="Country"
              //  style={{ background: "#D3D3D3" }}
            >
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
        </Row>
        <Row>
          <Form.Item style={{ width: "100%" }}>
            <Select
              placeholder="Martial Status"
              //   style={{ background: "#D3D3D3" }}
            >
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
        </Row>
        <Row style={{ marginBottom: "15px" }}>
          <Checkbox>
            {" "}
            Yes, I finished high school or I have qualifying training{" "}
          </Checkbox>
        </Row>
        <Row>
          <Button
            style={{
              width: "100%",
              background: "#4AC97D",
              height: "45px",
              borderRadius: "10px",
            }}
            htmlType="submit"
          >
            Continue
          </Button>
        </Row>
      </Form>{" "}
    </div>
  );
}

export default Forms;
