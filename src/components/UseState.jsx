import React, {useState} from 'react';

const Counter = () => {
  // [stateName, setState] for example [count, setCount]
  //setCount is a function; useState(initialState)
  let [count, setCount] = useState(0);

  //not needed anymore
  // function increase() {
  //   setCount(count + 1)
  // }
  // function decrease() {
  //   setCount(count - 1)
  // }

  return (
    <div>
      <h1>Hi, I'm new counter with hooks: {count}</h1>
      <button onClick={() => setCount(count +1)}>+</button>
      <button onClick={() => setCount(count -1)}>-</button>
      <br></br>
      <hr></hr>
      
      {/* <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button> */}
    </div>
  )
}

export default Counter;