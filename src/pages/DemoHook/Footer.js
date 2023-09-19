import React from "react";

export default function Footer({ number, handleSetNumber }) {
  return (
    <div>
      <h2>Gấp đôi số lượng</h2>
      <h1>{number * 2}</h1>
      <button
        onClick={() => {
          handleSetNumber(Math.floor(Math.random() * 1000));
        }}
        className="btn btn-danger"
      >
        Random
      </button>
    </div>
  );
}

// Math.random
