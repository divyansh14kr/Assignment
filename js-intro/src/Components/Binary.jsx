import React, { useState } from "react";

const DecimalToBinary = () => {
  const [decimal, setDecimal] = useState("");
  const [binary, setBinary] = useState(null);

  const convertToBinary = (num) => {
    const n = parseInt(num);
    if (isNaN(n) || n < 0) return "Please enter a valid non-negative number.";
    return n.toString(2);
  };

  const handleConvert = () => {
    const result = convertToBinary(decimal);
    setBinary(result);
  };

  return (
    <div>
      <h3>Decimal to Binary Converter</h3>
      <input
        type="number"
        value={decimal}
        onChange={(e) => setDecimal(e.target.value)}
        placeholder="Enter a decimal number"
      />
      <button onClick={handleConvert}>Convert</button>
      {binary !== null && <p>Binary: {binary}</p>}
    </div>
  );
};

export default DecimalToBinary;
