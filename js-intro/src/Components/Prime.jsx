import React, { useState } from "react";

const PrimeChecker = () => {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const isPrime = (num) => {
    const n = parseInt(num);
    if (isNaN(n) || n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  const handleCheck = () => {
    if (isPrime(number)) {
      setResult(`${number} is a prime number.`);
    } else {
      setResult(`${number} is not a prime number.`);
    }
  };

  return (
    <div>
      <h3>Prime Number Checker</h3>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={handleCheck}>Check</button>
      <p>{result}</p>
    </div>
  );
};

export default PrimeChecker;
