import React, { useState } from "react";
import Footer from "./Footer";

export default function DemoHook() {
  let [number, setNumber] = useState(1);
  let handleIncrease = () => {
    setNumber(number++);
  };
  let handleDecrease = () => {
    setNumber(number--);
  };
  return (
    <div className="py-5 text-center">
      <button onClick={handleIncrease} className="btn btn-dark">
        +
      </button>
      <strong className="display-1">{number}</strong>
      <button onClick={handleDecrease} className="btn btn-dark">
        -
      </button>
      <Footer handleSetNumber={setNumber} number={number} />
    </div>
  );
}

// hook
