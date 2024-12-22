import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function counterIncrease(){
    setCount(count+1)
  }

  function counterDecrease(){
    setCount(count-1);
  }

  function counterReset(){
    setCount(0);
  }

  return (
    <>
    <div>
      <h1>{count}</h1>
    </div>
    <button onClick={counterIncrease}>Increase</button><br /><br />
    <button onClick={counterDecrease}>Decrease</button><br /><br />
    <button onClick={counterReset}>Reset</button><br />
    </>
  )
}

export default App
