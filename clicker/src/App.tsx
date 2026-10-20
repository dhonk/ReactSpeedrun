import React, { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  function clickbutton() {
    setCount(prev => prev + 1)
  }

  function reset() {
    setCount(0)
  }

  return (
    <>
      <button onClick={clickbutton}>{count}</button>
      <button className="reset" onClick={reset}>start over</button>
    </>
  )
}

export default App
