import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./Actions";

function App() {
  const marksValue = useSelector((state) => state.MarksReducer.marks);
  const dispatch = useDispatch();

  const dec = () => {
    dispatch(decrement());
  };

  const inc = () => {
    dispatch(increment());
  };

  return (
    <>
      <h1>{marksValue}</h1>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </>
  );
}

export default App;
