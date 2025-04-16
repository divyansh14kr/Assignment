import React, { useState } from "react";

const FrequencyCounter = () => {
  const [input, setInput] = useState("");
  const [frequencies, setFrequencies] = useState(null);

  const countFrequencies = (arr) => {
    const freqMap = {};
    for (let item of arr) {
      freqMap[item] = (freqMap[item] || 0) + 1;
    }
    return freqMap;
  };

  const handleCount = () => {
    const elements = input.split(",").map((e) => e.trim());
    const freq = countFrequencies(elements);
    setFrequencies(freq);
  };

  return (
    <div>
      <h3>Frequency Counter</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Comma-separated values"
      />
      <button onClick={handleCount}>Count</button>
      {frequencies && (
        <ul>
          {Object.entries(frequencies).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FrequencyCounter;
