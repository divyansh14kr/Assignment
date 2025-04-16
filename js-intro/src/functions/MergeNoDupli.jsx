import React, { useState } from "react";

const MergeArrays = () => {
  const [array1, setArray1] = useState("");
  const [array2, setArray2] = useState("");
  const [result, setResult] = useState(null);

  const mergeAndDeduplicate = (arr1, arr2) => {
    return [...new Set([...arr1, ...arr2])];
  };

  const handleMerge = () => {
    const a1 = array1.split(",").map((e) => e.trim());
    const a2 = array2.split(",").map((e) => e.trim());
    const merged = mergeAndDeduplicate(a1, a2);
    setResult(merged);
  };

  return (
    <div>
      <h3>Merge Two Arrays (Remove Duplicates)</h3>
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
      <button onClick={handleMerge}>Merge</button>
      {result && <p>Merged Array: {result.join(", ")}</p>}
    </div>
  );
};

export default MergeArrays;
