import React, { useState, useRef } from "react";

import Pager from "../pagers/Pager";

import "./BoxContainer.css";
import { generateFizzNumbers } from "./generateFizz";

const BoxContainer = ({ max_pages }) => {
  const [moduls, setModuls] = useState(() => generateFizzNumbers(10, 1));
  const [page, setPage] = useState(1);
  const from_what = useRef(1);

  const nextPageHandler = () => {
    if (page >= max_pages) return;

    from_what.current = from_what.current + 10;
    setModuls(generateFizzNumbers(10, from_what.current));
    setPage((prev_page) => prev_page + 1);
  };
  const prevPageHandler = () => {
    if (page <= 1) return;

    from_what.current = from_what.current - 10;
    setModuls(generateFizzNumbers(10, from_what.current));
    setPage((prev_page) => prev_page - 1);
  };

  return (
    <React.Fragment>
      <ul className="box-container">{moduls}</ul>
      <Pager
        max_active={page >= max_pages ? "noactive" : "active"}
        min_active={page === 1 ? "noactive" : "active"}
        nextPage={nextPageHandler}
        prevPage={prevPageHandler}
      />
    </React.Fragment>
  );
};

export default BoxContainer;
