import React, { useState } from "react";

const DigitSum = () => {
  const [input, setInput] = useState(""); 
  const [sum, setSum] = useState(null); 


  const calculateSum = () => {
    let totalSum = 0;
    for (let i = 0; i < input.length; i++) {
      totalSum += Number.parseInt(input[i]);
    }
    setSum(totalSum); 
  };

  return (
    <div>
      <h3>Sum of Digits</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Enter a number"
      />
      <button onClick={calculateSum}>Calculate Sum</button>
      {sum !== null && <p>Sum of digits: {sum}</p>} 
    </div>
  );
};

export default DigitSum;
