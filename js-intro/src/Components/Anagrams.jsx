import React, { useState } from "react";

const AnagramChecker = () => {
  const [str1, setStr1] = useState("");
  const [str2, setStr2] = useState("");
  const [result, setResult] = useState(null);

  const isAnagram = (a, b) => {
    const sortStr = (s) => s.split("").sort().join("");
    return sortStr(a) === sortStr(b);
  };

  const handleCheck = () => {
    const res = isAnagram(str1, str2);
    setResult(res ? "Strings are Anagrams " : "String are not Anagrams ");
  };

  return (
    <div>
      <h3>Anagram Checker</h3>
      <input
        type="text"
        value={str1}
        onChange={(e) => setStr1(e.target.value)}
        placeholder="First String"
      />
      <br />
      <input
        type="text"
        value={str2}
        onChange={(e) => setStr2(e.target.value)}
        placeholder="Second String"
      />
      <br />
      <button onClick={handleCheck}>Check</button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default AnagramChecker;
