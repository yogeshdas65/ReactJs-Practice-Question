import React, { useState } from 'react'

const MultipleCounters = () => {
  const [count , setCount] = useState(0)
  const handleInc = () => {
    setCount(count +1)
  }
  const handleDec = () => {
    setCount(count - 1)
  }
  return (
    
    <>
      <div>MultipleCounters</div>
      <div>
        <button onClick={handleInc}>INCREMENT</button>
        <br/>
        {count}
        <br />
        <button onClick={handleDec}>DECREMENT</button>
      </div>
    
    </>
  )
}

export default MultipleCounters