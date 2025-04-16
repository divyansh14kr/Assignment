import { useState } from 'react'
import React from "react";
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


import EvenOdd from "./Components/EvenOdd";
import LargestAmonng from "./Components/LargestAmong";
import LeapYear from "./Components/LeapYear";
import Factorial from "./Components/Factorial";
import Fibonacci from "./Components/Fibonacci";
import Palindrome from "./Components/Palindrome";
import VowelCounter from "./Components/VowelCount";
import ReverseStringComponent from "./Components/ReverseString";
import DigitSum from "./Components/DigitSum";
import PrimeChecker from "./Components/Prime";
import GCDCalculator from "./Components/Gcd";
import LCMCalculator from "./Components/Lcm";
import DecimalToBinary from "./Components/Binary";
import BinaryToDecimal from "./Components/Decimal";
import Sort from "./Components/Sort";
import SecondLargest from "./Components/SecondLargest";
import RemoveDuplicates from "./Components/RemoveDuplicates";
import FrequencyCounter from "./Components/Frequency";
import MergeArrays from "./Components/MergeNoDupli";
import ArrayIntersection from "./Components/Intersection";
import ArrayUnion from "./Components/Union";
import AnagramChecker from "./Components/Anagrams";
import NumWords from "./Components/NumWords";
import CapitalizeWords from "./Components/Capitalize";

const App = () => {
  return (
    <Router>
      <div>
        <h3>Choose a Component</h3>

        <div className="button-grid">
          <button><Link to="/evenodd">Even or Odd</Link></button>
          <button><Link to="/largestamong">Largest of 3</Link></button>
          <button><Link to="/leapyear">Leap Year</Link></button>
          <button><Link to="/factorial">Factorial</Link></button>
          <button><Link to="/fibonacci">Fibonacci</Link></button>
          <button><Link to="/palindrome">Palindrome</Link></button>
          <button><Link to="/vowelcount">Vowel Count</Link></button>
          <button><Link to="/reversestring">Reverse String</Link></button>
          <button><Link to="/digitsum">Sum of Digits</Link></button>
          <button><Link to="/prime">Prime Number</Link></button>
          <button><Link to="/gcd">GCD</Link></button>
          <button><Link to="/lcm">LCM</Link></button>
          <button><Link to="/binary">Decimal to Binary</Link></button>
          <button><Link to="/decimal">Binary to Decimal</Link></button>
          <button><Link to="/sort">Sort Array</Link></button>
          <button><Link to="/secondlargest">Second Largest</Link></button>
          <button><Link to="/removeduplicates">Remove Duplicates</Link></button>
          <button><Link to="/frequency">Frequency of Elements</Link></button>
          <button><Link to="/mergenodupli">Merge Arrays</Link></button>
          <button><Link to="/intersection">Intersection of Arrays</Link></button>
          <button><Link to="/union">Union of Arrays</Link></button>
          <button><Link to="/anagrams">Anagram Check</Link></button>
          <button><Link to="/numwords">Word Count</Link></button>
          <button><Link to="/capitalize">Capitalize Words</Link></button>
          
        </div>
        <Routes>
  <Route path="/evenodd" element={<EvenOdd />} />
  <Route path="/largestamong" element={<LargestAmonng />} />
  <Route path="/leapyear" element={<LeapYear />} />
  <Route path="/factorial" element={<Factorial />} />
  <Route path="/fibonacci" element={<Fibonacci />} />
  <Route path="/palindrome" element={<Palindrome />} />
  <Route path="/vowelcount" element={<VowelCounter />} />
  <Route path="/reversestring" element={<ReverseStringComponent />} />
  <Route path="/digitsum" element={<DigitSum />} />
  <Route path="/prime" element={<PrimeChecker />} />
  <Route path="/gcd" element={<GCDCalculator />} />
  <Route path="/lcm" element={<LCMCalculator />} />
  <Route path="/binary" element={<DecimalToBinary />} />
  <Route path="/decimal" element={<BinaryToDecimal />} />
  <Route path="/sort" element={<Sort />} />
  <Route path="/secondlargest" element={<SecondLargest />} />
  <Route path="/removeduplicates" element={<RemoveDuplicates />} />
  <Route path="/frequency" element={<FrequencyCounter />} />
  <Route path="/mergenodupli" element={<MergeArrays />} />
  <Route path="/intersection" element={<ArrayIntersection />} />
  <Route path="/union" element={<ArrayUnion />} />
  <Route path="/anagrams" element={<AnagramChecker />} />
  <Route path="/numwords" element={<NumWords />} />
  <Route path="/capitalize" element={<CapitalizeWords />} />
</Routes>

      </div>
    </Router>
  );
};

export default App;
