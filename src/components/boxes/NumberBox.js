import React from "react";

import "./Boxes.css";

const NumberBox = (props) => {
  return <div className="box">{props.value}</div>;
};

export default NumberBox;
