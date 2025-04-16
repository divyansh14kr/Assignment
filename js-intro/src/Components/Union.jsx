import React, { useState } from "react";

const ArrayUnion = () => {
  const [array1, setArray1] = useState("");
  const [array2, setArray2] = useState("");
  const [result, setResult] = useState(null);

  const findUnion = (arr1, arr2) => {
    return [...new Set([...arr1, ...arr2])];
  };

  const handleUnion = () => {
    const a1 = array1.split(",").map((e) => e.trim());
    const a2 = array2.split(",").map((e) => e.trim());
    const union = findUnion(a1, a2);
    setResult(union);
  };

  return (
    <div>
      <h3>Union of Two Arrays</h3>
      <input
        type="text"
        value={array1}
        onChange={(e) => setArray1(e.target.value)}
        placeholder="Array 1"
      />
      <br />
      <input
        type="text"
        value={array2}
        onChange={(e) => setArray2(e.target.value)}
        placeholder="Array 2"
      />
      <br />
      <button onClick={handleUnion}>Find Union</button>
      {result && <p>Union: {result.join(", ")}</p>}
    </div>
  );
};

export default ArrayUnion;
