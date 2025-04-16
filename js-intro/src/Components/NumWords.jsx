import React, { useState } from "react";

const NumWords = () => {
  const [line, setLine] = useState("");
  const [count, setCount] = useState(0);

  const numWords = () => {
    const words = line.trim().split(/\s+/); 
    setCount(words.filter(Boolean).length);
  };

  return (
    <div>
      <h3>Word Counter</h3>
      <input
        type="text"
        value={line}
        onChange={(e) => setLine(e.target.value)}
        placeholder="Enter sentence"
      />
      <button onClick={numWords}>Check number of words</button>
      <p>Word Count: {count}</p>
    </div>
  );
};

export default NumWords;
