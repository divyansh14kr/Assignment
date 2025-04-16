import React, { useState } from "react";

const PalindromeChecker = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const isPalindrome = (str) => {
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - i - 1]) {
        return false;
      }
    }
    return true;
  };

  const handleCheck = () => {
    if (isPalindrome(text)) {
      setResult(`"${text}" is a palindrome.`);
    } else {
      setResult(`"${text}" is not a palindrome.`);
    }
  };

  return (
    <div>
      <h3>Palindrome Checker</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={handleCheck}>Check</button>
      <p>{result}</p>
    </div>
  );
};

export default PalindromeChecker;
