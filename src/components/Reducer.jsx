import React, {useReducer} from 'react';

const Reducer = () => {
  const reduce = (state, action) => {
    if (action.type === "mir"){
      return state + 1
    } else if (action.type === "maxence") {
      return state - 1
    } else if (action.type === "*") {
      return state * 3
    }
  };
  //initial state is 0
  let [state, dispatch] = useReducer(reduce, 0);



  return (
    <div>
      <h1>{state}</h1>
      <button onClick={()=> dispatch({type: "mir"})}>+</button>
      <button onClick={()=> dispatch({type: "maxence"})}>-</button>
      <button onClick={()=> dispatch({type: "*"})}>* 3</button>
    </div>
  )
}

export default Reducer;