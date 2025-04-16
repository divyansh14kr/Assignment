import React, { useState } from "react";

const FactorialCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const factorial = (n) => {
    const num = parseInt(input);
    if (n === 0 || n === 1) return 1;
    let fact = 1;
    for (let i = 2; i <= n; i++) {
      fact *= i;
    }
    return fact;
  };


  return (
    <div>
      <h3>Factorial Calculator</h3>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={factorial(input)}>Calculate</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
};

export default FactorialCalculator;
