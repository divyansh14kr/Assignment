import React, { useState } from "react";

const FibonacciFinder = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const fibonacci = (n) => {
    let a = 1, b = 1;
    if (n === 1 || n === 2) return 1;

    let fib = 0;
    for (let i = 3; i <= n; i++) {
      fib = a + b;
      a = b;
      b = fib;
    }
    return fib;
  };

  const handleCheck = () => {
    const n = parseInt(input);
    if (!isNaN(n) && n > 0) {
      setResult(fibonacci(n));
    } else {
      setResult("Please enter a valid positive number.");
    }
  };

  return (
    <div>
      <h3>Fibonacci Number Finder</h3>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter position (e.g. 5)"
      />
      <button onClick={handleCheck}>Find</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
};

export default FibonacciFinder;
