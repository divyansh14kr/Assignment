import React, { useState } from "react";

const GCDCalculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const findGCD = (a, b) => {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };

  const handleCalculate = () => {
    const a = parseInt(num1);
    const b = parseInt(num2);

    if (!isNaN(a) && !isNaN(b) && a >= 0 && b >= 0) {
      setResult(findGCD(a, b));
    } else {
      setResult("Please enter two valid non-negative integers.");
    }
  };

  return (
    <div>
      <h3>GCD Calculator</h3>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <button onClick={handleCalculate}>Find GCD</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
};

export default GCDCalculator;
