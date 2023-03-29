import React from "react";
import BoxContainer from "./components/boxContainer/BoxContainer";

import "./App.css";

const max_pages = 10;

const App = () => {
  return (
    <div className="App">
      <BoxContainer max_pages={max_pages} />
    </div>
  );
};

export default App;
