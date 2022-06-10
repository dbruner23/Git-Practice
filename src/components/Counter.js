import { useState, useEffect } from 'react'

const Counter = () => {
  const [count, setCount] = useState(100)
  const [sum, setSum] = useState(100)

  useEffect(() => {
    console.log(`the count is at ${count}`)
    setSum(sum + count)
    console.log(`the sum is at ${sum}`)
  }, [count])
  
  const updateCount = (type) => {
    type === 'subtract' ? setCount(count - 1) : setCount(count + 1) 
  }

  return (
    <div className="App">
      <div>
        <h2>count: {count}</h2>
      </div> 
      <button onClick={() => updateCount('add')}>Add</button>
      <button onClick={() => updateCount('subtract')}>Subtract</button>
    </div>
  );
}

export default Counter;
