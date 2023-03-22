import React from "react";

import "./Boxes.css";

const NumberBox = (props) => {
  return <li className="box">{props.value}</li>;
};

export default NumberBox;
