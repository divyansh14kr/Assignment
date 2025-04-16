import { useState } from 'react'
import './App.css'
import PalindromeChecker from './functions/Palindrome'
import VowelCounter from './functions/VowelCount'

function App() {


  return (
    <>
    <Router route>
    <PalindromeChecker></PalindromeChecker>
    </Router>
    
     <VowelCounter></VowelCounter>
    </>
  )
}

export default App
