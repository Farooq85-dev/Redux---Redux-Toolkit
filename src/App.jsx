import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByValue } from "./Actions";

function App() {
  const dispatch = useDispatch();
  const cValue = useSelector((state) => state.a.c);
  const [value, setValue] = useState(0);

  const addValue = () => {
    dispatch(increment());
  };

  const subValue = () => {
    dispatch(decrement());
  };

  const addValueByInput = () => {
    const numericValue = Number(value);
    dispatch(incrementByValue(numericValue));
  };

  return (
    <div>
      <h1>Value: {cValue}</h1>
      <button onClick={addValue}>Increment</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addValueByInput}>Increment By Value</button>
      <button onClick={subValue}>Decrement</button>
    </div>
  );
}

export default App;
