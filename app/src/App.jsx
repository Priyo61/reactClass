import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { use } from "react";

function App() {
  const [count, setCount] = useState(0);

  function onclick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={onclick}>Counter: {count}</button>
    </div>
  );
}

export default App;
