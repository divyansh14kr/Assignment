import React, { useState } from "react";

const SecondLargest = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const findSecondLargest = (arr) => {
    let first = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
      if (num > first) {
        second = first;
        first = num;
      } else if (num > second && num !== first) {
        second = num;
      }
    }

    return second;
  };

  const handleFind = () => {
    const numbers = input.split(",").map((n) => parseFloat(n.trim()));
    const secondLargest = findSecondLargest(numbers);
    setResult(secondLargest);
  };

  return (
    <div>
      <h3>Second Largest Number</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Comma-separated numbers"
      />
      <button onClick={handleFind}>Find</button>
      {result !== null && <p>Second Largest: {result}</p>}
    </div>
  );
};

export default SecondLargest;
