import React, { useState } from "react";

const LeapYear = () => {
  const [year, setYear] = useState("");
  const [isLeapYear, setIsLeapYear] = useState(null); 

  
  const checkLeapYear = () => {
    if (
      (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ) {
      setIsLeapYear(true); 
    } else {
      setIsLeapYear(false); 
    }
  };

  return (
    <div>
      <h3>Check Leap Year</h3>
      <input
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="Enter a year"
      />
      <button onClick={checkLeapYear}>Check</button>
      {isLeapYear !== null && (
        <p>{isLeapYear ? "Leap Year" : "Not a Leap Year"}</p>
      )}
    </div>
  );
};

export default LeapYear;
