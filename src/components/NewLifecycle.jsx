import React, {useState, useEffect} from 'react';

const NewLife=()=>{
  let [count, setCount]= useState(0);
  
  useEffect(() => {
    document.title = `you clicked ${count} times `
  })

  return (
    <div>
      <h1>I am new lifecycle: {count}</h1>
      <button onClick={()=> setCount(count + 1)}>Click me</button>
      <br></br>
      <hr></hr>
    </div>
  )
}

export default NewLife;