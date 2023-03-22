import React, { useState, useRef } from "react";

import NumberBox from "./components/boxes/NumberBox";
import FizzBox from "./components/boxes/FizzBox";
import BuzzBox from "./components/boxes/BuzzBox";
import FizzBuzzBox from "./components/boxes/FizzBuzzBox";
import Pager from "./components/pagers/Pager";

import { generateFizzNumbers } from "./utils/generateFizz";
import "./App.css";

const max_pages = 10;

const App = () => {
  const [page, setPage] = useState(1);
  const [numbers, setNumbers] = useState(() => generateFizzNumbers(10, 1));

  const from = useRef(1);

  const nextPageHandler = () => {
    if (page >= max_pages) return;

    from.current = from.current + 10;
    setNumbers(generateFizzNumbers(10, from.current));
    setPage((prev_page) => prev_page + 1);
  };
  const prevPageHandler = () => {
    if (page <= 1) return;

    from.current = from.current - 10;
    setNumbers(generateFizzNumbers(10, from.current));
    setPage((prev_page) => prev_page - 1);
  };

  return (
    <div className="App">
      {numbers.map((number) => {
        if (number === "Fizz") return <FizzBox key={number.i} />;
        else if (number === "Buzz") return <BuzzBox />;
        else if (number === "FizzBuzz") return <FizzBuzzBox />;
        else return <NumberBox value={number.value} />;
      })}
      <Pager
        max_active={page >= max_pages ? "noactive" : "active"}
        min_active={page === 1 ? "noactive" : "active"}
        nextPage={nextPageHandler}
        prevPage={prevPageHandler}
      />
    </div>
  );
};

export default App;
