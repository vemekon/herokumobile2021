import React from "react";
//import "antd/dist/antd.css";
import { Carousel } from "antd";
import { data } from "./data";

const contentStyle = {
  // height: '10px',
  color: "#fff",
  //lineHeight: '160px',
  // textAlign: 'center',
  //background: "#364d79",
  position: "absolute",
  zIndex: "5",
  top: "20%",
  margin: "0 20px 0 50px",

  width: "22rem",
  overflow: "hidden",
};

const c = {
  height: "160px",
  color: "white",
  lineHeight: "160px",
  textAlign: "center",
  background: "red",
  position: "relative",
  overflow: "hidden",
};
const d = {
  objectFit: "cover",
  height: "160px",
  width: "100%",
  overflow: "hidden",
};

export default function carousel() {
  return (
    <Carousel autoplay>
      {data.map((x) => (
        <div key={x.id}>
          <div style={c}>
            <img style={d} src={x.img} alt="img" />
          </div>
          <h3 style={contentStyle}>{x.title}</h3>
        </div>
      ))}
    </Carousel>
  );
}
