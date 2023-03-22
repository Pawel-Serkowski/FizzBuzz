import React from "react";

import "./Pager.css";

const Pager = (props) => {
  return (
    <section className="pager">
      <button className={props.min_active} onClick={props.prevPage}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <button className={props.max_active} onClick={props.nextPage}>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </section>
  );
};

export default Pager;
