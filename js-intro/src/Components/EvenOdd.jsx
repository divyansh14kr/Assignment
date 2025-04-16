import React, { useState } from "react";

const EvenOdd = () => {
  const [number, setNumber] = useState("");  
  const [result, setResult] = useState("");  


  const checkEvenOdd = () => {
    if (number % 2 === 0) {
      setResult("Even");
    } else {
      setResult("Odd");
    }
  };

  return (
    <div>
      <h3>Check If Even or Odd</h3>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}  
        placeholder="Enter a number"
      />
      <button onClick={checkEvenOdd}>Check</button>
      {result && <p>The number is: {result}</p>}  
    </div>
  );
};

export default EvenOdd;
