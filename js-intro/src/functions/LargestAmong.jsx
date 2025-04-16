import React, { useState } from "react";

const LargestNumberFinder = () => {
  const [input, setInput] = useState("");
  const [largest, setLargest] = useState(null);

  const findLargest = (str) => {
    const numbers = str.split(",").map(n => parseFloat(n.trim()));
    if (numbers.some(isNaN)) return null;

    let max = -Infinity;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
    return max;
  };

  const handleCheck = () => {
    const result = findLargest(input);
    setLargest(result);
  };

  return (
    <div>
      <h3>Find Largest Number</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers separated by commas"
      />
      <button onClick={handleCheck}>Find</button>
      {largest !== null && <p>Largest Number: {largest}</p>}
    </div>
  );
};

export default LargestNumberFinder;
