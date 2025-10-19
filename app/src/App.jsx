import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { use } from "react";

function App() {
  const [count, setCount] = useState(0);

  function onclickIncrease() {
    setCount(count + 1);
  }
  function onclickDecrease() {
    setCount(count - 1);
  }
  function Reset() {
    setCount(0);
  }

  return (
    <>
      <h1>Counter : {count}</h1>
      <div>
        <button onClick={onclickIncrease}>Increase</button>
        <button onClick={onclickDecrease}>Decrease</button>
        <button onClick={Reset}>Reset</button>
      </div>
    </>
  );
}

export default App;
