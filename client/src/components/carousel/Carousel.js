import React from "react";
//import "antd/dist/antd.css";
import { Carousel } from "antd";
import { data } from "./data";
import { Link } from "react-router-dom";

const contentStyle = {
  // height: '10px',
  color: "black",
  //lineHeight: '160px',
  // textAlign: 'center',
  //background: "#364d79",
  position: "absolute",
  zIndex: "5",
  top: "80%",
  margin: "0 20px 0 50px",

  width: "22rem",
  overflow: "hidden",
};

const c = {
  height: "160px",
  color: "white",
  lineHeight: "160px",
  textAlign: "center",
  background: "transparent",
  position: "relative",
  overflow: "hidden",
};
const d = {
  objectFit: "contain",
  height: "260px",
  width: "100%",
  overflow: "hidden",
};

export default function carousel() {
  return (
    <Carousel autoplay>
      {data.map((x) => (
        <div key={x.id}>
          <Link to="/shop" style={c}>
            <img style={d} src={x.img} alt="img" />
          </Link>
          <h3></h3>
        </div>
      ))}
    </Carousel>
  );
}
