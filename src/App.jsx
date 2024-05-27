import { Fragment } from "react";
import { useState } from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const plusCount = () => {
    setCount(count +1);
  };
  const minusCount = () => {
    setCount(count -1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <Fragment>
      <button className="minusCountButton" onClick={minusCount}>-</button>
      Count: {count}
      <button className="plusCountButton" onClick={plusCount}>+</button>
      <button className="resetButton" onClick={reset}>reset</button>
    </Fragment>
  );
}

export default App;
