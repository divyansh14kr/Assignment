import React, { useState } from "react";

const BinaryToDecimal = () => {
  const [binary, setBinary] = useState("");
  const [decimal, setDecimal] = useState(null);

  const convertToDecimal = (bin) => {
    if (!/^[01]+$/.test(bin)) {
      return "Please enter a valid binary number (only 0s and 1s).";
    }
    return parseInt(bin, 2);
  };

  const handleConvert = () => {
    const result = convertToDecimal(binary);
    setDecimal(result);
  };

  return (
    <div>
      <h3>Binary to Decimal Converter</h3>
      <input
        type="text"
        value={binary}
        onChange={(e) => setBinary(e.target.value)}
        placeholder="Enter a binary number"
      />
      <button onClick={handleConvert}>Convert</button>
      {decimal !== null && <p>Decimal: {decimal}</p>}
    </div>
  );
};

export default BinaryToDecimal;
