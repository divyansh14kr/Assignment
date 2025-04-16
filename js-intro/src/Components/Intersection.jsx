import React, { useState } from "react";

const ArrayIntersection = () => {
  const [array1, setArray1] = useState("");
  const [array2, setArray2] = useState("");
  const [result, setResult] = useState(null);

  const findIntersection = (arr1, arr2) => {
    const set2 = new Set(arr2);
    return arr1.filter((item) => set2.has(item));
  };

  const handleIntersection = () => {
    const a1 = array1.split(",").map((e) => e.trim());
    const a2 = array2.split(",").map((e) => e.trim());
    const intersection = findIntersection(a1, a2);
    setResult(intersection);
  };

  return (
    <div>
      <h3>Intersection of Two Arrays</h3>
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
      <button onClick={handleIntersection}>Find Intersection</button>
      {result && <p>Intersection: {result.join(", ")}</p>}
    </div>
  );
};

export default ArrayIntersection;
