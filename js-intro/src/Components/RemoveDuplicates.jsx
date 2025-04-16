import React, { useState } from "react";

const RemoveDuplicates = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const removeDuplicates = (arr) => {
    return [...new Set(arr)];
  };

  const handleRemove = () => {
    const numbers = input.split(",").map((n) => parseFloat(n.trim()));
    const unique = removeDuplicates(numbers);
    setResult(unique);
  };

  return (
    <div>
      <h3>Remove Duplicates</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Comma-separated numbers"
      />
      <button onClick={handleRemove}>Remove</button>
      {result !== null && <p>Unique Values: {result.join(", ")}</p>}
    </div>
  );
};

export default RemoveDuplicates;
