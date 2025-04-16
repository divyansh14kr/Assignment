import React, { useState } from "react";

const CapitalizeWords = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const capitalizeWords = () => {
    const words = input.split(" ");
    let capitalized = "";

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      let capWord = "";
      if (word.length > 0) {
        capWord += word.charAt(0).toUpperCase();
        for (let j = 1; j < word.length; j++) {
          capWord += word[j];
        }
      }
      capitalized += capWord;
      if (i !== words.length - 1) capitalized += " ";
    }

    setResult(capitalized);
  };

  return (
    <div>
      <h3>Capitalize Words</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={capitalizeWords}>Capitalize</button>
      <p>{result}</p>
    </div>
  );
};

export default CapitalizeWords;
