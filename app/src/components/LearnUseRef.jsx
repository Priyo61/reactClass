import { useRef } from "react";

export default function LearnUseRef() {
  const inputRef = useRef();

  function counter() {
    inputRef.current.focus();
  }
  return (
    <div>
      <input ref={inputRef} type="text" />
      <input type="text" />
      <button onClick={counter}>ClickMe!</button>
    </div>
  );
}
