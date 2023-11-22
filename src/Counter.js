import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement,reset } from "./Action";
const Counter = () => {
//   const [count, setCount] = useState(0);
const count=useSelector((state)=>state.count)
  const dispatch=useDispatch();
  const addHandler = () => {
    dispatch(increment())
  };
  const minusHandler = () => {
    dispatch(decrement())
    
  };
  const resetHandler=()=>{
    dispatch(reset())

  }
  return (
    <div>
      <center>
        <button onClick={addHandler}>+</button>
        {count}
        <button onClick={minusHandler} disabled={count === 0}>
          -
        </button>
        <br/>
        <button onClick={resetHandler}>Reset</button>
      </center>
    </div>
  );
};

export default Counter;
