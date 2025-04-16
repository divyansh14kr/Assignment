import React, { useState } from "react";

const VowelCounter = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(null);

  const countVowels = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i].toLowerCase())) {
        vowelCount++;
      }
    }
    return vowelCount;
  };

  const handleCount = () => {
    const result = countVowels(text);
    setCount(result);
  };

  return (
    <div>
      <h3>Vowel Counter</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={handleCount}>Count Vowels</button>
      {count !== null && <p>Vowel Count: {count}</p>}
    </div>
  );
};

export default VowelCounter;
