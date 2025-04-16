import React, { useState } from "react";

const Sort = () => {
  const [input, setInput] = useState("");
  const [sortedArray, setSortedArray] = useState([]);

  const sortArray = () => {
    const arr = input.split(",").map(Number); 
    arr.sort((a, b) => a - b); 
    setSortedArray(arr); 
  };

  return (
    <div>
      <h3>Basic Array Sort</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers separated by commas"
      />
      <button onClick={sortArray}>Sort</button>
      {sortedArray.length > 0 && <p>Sorted: {sortedArray.join(", ")}</p>}
    </div>
  );
};

export default BasicSort;
