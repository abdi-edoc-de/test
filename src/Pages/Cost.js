import React, { useState } from "react";
import { Button, Divider, Table, Collapse } from "antd";
import { CheckOutlined, PlayCircleOutlined } from "@ant-design/icons";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    width: "40%",
  },
  {
    title: "Age",
    dataIndex: "age",
    width: "40%",
  },
  {
    title: "Address",
    dataIndex: "address",
    width: "20%",
  },
];

const data = [];
for (let i = 0; i < 7; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
const Cost = () => {
  return (
    <div style={{ background: "#F7F8F9" }}>
      <div style={{ margin: "0 5%" }}>
        <div style={{ display: "flex" }}>
          <PlayCircleOutlined
            style={{
              marginRight: "20px",
            }}
          />
          <p>Find the right visa for you!</p>
        </div>
        <p style={{ fontSize: "30px", color: "#4AC97D" }}>
          Diversity Visa Cost
        </p>
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "1% 3%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <div
              style={{ height: "100%", alignItems: "center", display: "flex" }}
            >
              <Divider
                type="vertical"
                style={{
                  background: "#00579B",
                  height: "22",
                  alignItems: "center",
                  border: "2px solid #00579B",
                }}
              />
              <p
                style={{
                  color: "black",
                  fontWeight: "bold",
                  margin: "0",
                  alignItems: "center",
                }}
              >
                Mandatory Government Fees For Green Cards
              </p>
            </div>
            <Button
              style={{
                width: "150px",
                fontSize: "16px",
                background: "#fd816b",
                color: "white",
                height: "40px",
                border: "none",
              }}
            >
              Apply Now
            </Button>
          </div>
          <Table columns={columns} pagination={false} dataSource={data} />
        </div>
        <div style={{ display: "flex", float: "right" }}>
          <p style={{ fontSize: "10px", marginRight: "40px" }}>
            Fees are subject ot change, please use this calculator
          </p>
        </div>

        <Collapse
          style={{
            border: "none",
            borderBottom: "1px solid #170A61",
            borderRadius: "0px",
            clear: "both",
            background: "#F7F8F9",
          }}
          expandIconPosition="right"
          size="large"
          items={[
            {
              key: "1",
              label: (
                <p
                  style={{
                    color: "#4AC97D",
                    //   fontWeight: "bold",
                    fontSize: "35px",
                    margin: "0",
                  }}
                >
                  {" "}
                  Diversity Visa Timeline{" "}
                </p>
              ),
              children: <p>text</p>,
            },
          ]}
        />
        <Collapse
          style={{
            border: "none",
            borderBottom: "1px solid #170A61",
            borderRadius: "0px",
            clear: "both",
            background: "#F7F8F9",
          }}
          expandIconPosition="right"
          size="large"
          items={[
            {
              key: "1",
              label: (
                <p
                  style={{
                    color: "#4AC97D",
                    //   fontWeight: "bold",
                    fontSize: "35px",
                    margin: "0",
                  }}
                >
                  {" "}
                  Diversity Visa FAQs{" "}
                </p>
              ),
              children: <p>text</p>,
            },
          ]}
        />
      </div>
    </div>
  );
};
export default Cost;
