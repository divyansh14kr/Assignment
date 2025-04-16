import React, { useState } from "react";

const ReverseStringComponent = () => {
  const [text, setText] = useState("");
  const [reversed, setReversed] = useState("");

  const reverseString = (str) => {
    let revStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      revStr = revStr.concat(str[i]);
    }
    return revStr;
  };

  const handleReverse = () => {
    const result = reverseString(text);
    setReversed(result);
  };

  return (
    <div>
      <h3>Reverse String</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={handleReverse}>Reverse</button>
      {reversed && <p>Reversed: {reversed}</p>}
    </div>
  );
};

export default ReverseStringComponent;
