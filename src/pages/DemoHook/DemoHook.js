import React, { useEffect, useState } from "react";
import Footer from "./Footer";

export default function DemoHook() {
  let [number, setNumber] = useState(1);
  let handleIncrease = () => {
    setNumber(++number);
  };
  let handleDecrease = () => {
    setNumber(--number);
  };

  useEffect( 
    // Thay thế didMount, didUpdate, và willUnmount
    ()=> {
      console.log("Render lần đầu");
      // return giống willUnmount
      return () => {
        console.log('Removed');
      }
    }, [] //dependency rỗng thì useEffect chạy 1 lần đầu
  );
  useEffect( 
    // Thay thế didMount, didUpdate, và willUnmount
    ()=> {
      console.log("Render khi number thay đổi")
    }, [number] //dependency cố biến thì chạy mỗi khi biến thay đổi
  );

  console.log("render layout");
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
