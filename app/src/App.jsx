import { use } from "react";
import { useState, useEffect } from "react";

function App() {
  // const [count, setCount] = useState(1);
  // function increaseCount() {
  //   setCount((count) => count + 1);
  // }
  // useEffect(() => {
  //   setInterval(increaseCount, 1000);
  // }, []);

  const [curretTab, setCurrentTab] = useState("feed");
  useEffect(() => {
    console.log("send request to backend to get data for tab: " + curretTab);
  }, [curretTab]);
  return (
    <>
      {/* <div style={{ display: "flex" }}>
        <div
          style={{
            background: "red",
            borderRadius: 20,
            width: 20,
            height: 20,
            paddingLeft: 10,
            paddingTop: 5,
            marginLeft: 15,
          }}
        >
          {count}
        </div>
      </div>
      <img
        style={{ cursor: "pointer" }}
        width={40}
        src="https://media.istockphoto.com/id/1598038956/vector/bell-icon-vector-illustration-symbol.jpg?s=612x612&w=0&k=20&c=Ly_vjHmtbwhlsuCl8YkGqZ6zkOJKH03D_BhDY89Qzdg="
        alt=""
      /> */}
      {/* <button onClick={increaseCount}>increase count</button> */}

      <button
        onClick={() => setCurrentTab("feed")}
        style={{ color: curretTab == "feed" ? "red" : "black" }}
      >
        Feed
      </button>
      <button
        onClick={() => setCurrentTab("notification")}
        style={{ color: curretTab == "notification" ? "red" : "black" }}
      >
        Notification
      </button>
      <button
        onClick={() => setCurrentTab("messages")}
        style={{ color: curretTab == "messages" ? "red" : "black" }}
      >
        Messages
      </button>
      <button
        onClick={() => setCurrentTab("jobs")}
        style={{ color: curretTab == "jobs" ? "red" : "black" }}
      >
        Jobs
      </button>
    </>
  );
}

// function PostComponent() {
//   return (
//     <div>
//       <div
//         style={{
//           width: 200,
//           backgroundColor: "white",
//           borderRadius: 10,
//           borderColor: "gray",
//           borderWidth: 1,
//         }}
//       >
//         <img
//           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAYFBMVEUAfrv///8AdredvtsAeLgAerkAfLoAcbV4qtDX4+9em8j2+fzv9fkAdLdFjcLd6fOqyOBGksQXgr2Er9NWmMhYk8XF2OkAbLOTuNhtosy91eeyzePo8fcwiMAsgbw4hb7KzbIWAAADsklEQVR4nO2cbXfyIAyGCwVabLHVvthanf//Xz7aqbMa3JDnkHzg/rRzxtkuQ4CQYBJ2V6GnfLNNELTd5JMufkiS+091J42QCgNKSWFkV79A9cqg8DyQGdUvoRqOjDRj8eYBqmgNNtC3TFvcoVqOTXMTb29QDRE7XWSab6iejJ0u4v0MpQj4+I+UukDVhCbvIlOzpOhIGepsqq5ItMSmeJbUyURs9s7zNyW5wIZ4lsiTDb3p2yRbYn5+9nSU8CkqmATnXFBaC4rv1DikQ37cUYgBZ/FTc7jdKdI1jVAiG29IF5Vphm8sxfdsqeqEvvfziT1LfyHbKnu202wrXHfnI8DEWIoZUaivAwhVtIg7lshBJsYmxI1hBxvqLEQoaWNiK7T5E7Cbz66OZio+WKH6DA0qpQhF0VKisULhXafl2grV4O0Ju8IGhZgMMbWFSSMefrKzmAr1Og1EU7OhBG7sUkJQa9zYU3YAFXouhHevTPgXGnHqF0hVh890nkHeVHekMt1iz91V0qxTrSutp5XBXXcLSZPJRBlDKZkwi1aaPSqKoqS4pAJvwqlQL6W4aZu6P8xxUKn3Q742PseCEpCetiv5dojkKtVPx3qpB8U/3fTEWEHaPwaestXAEL2+/tps4JiMTe2HdX1LhkM/XrDkCgpPy/X8H4WorXF+MX12jvpCLfOlr4PGT2J9Tyhhv81e9UlOwg+K2y5DD6rdww4fKCksHr7U5JxA9YHK/mCniwZXv/KAOv3qTzeNjmvwc6jD6q9MrHSsYXhYCrwwwqrdluDnUC66brS0oJjb84NAUMwpLxgKanDxqlBQvcuuEArK6fVPKCg2BocqyvK3IS7r7z9AHepx1XXtqnl7PFe7gFD9ZselVEpJkZn0zcCAUI14WFYqW9nPHof3P35QL29Z+ZeV36HW6gf1mofk1sKKQ/ziBTUBfpL18FiXuooPVHkE3ETZyj0OB40PFBwlcQ1DOVxrfKDgR362GmIYqBLeeeQIf4QwUBMcI6kjfGcOA2WrlfAKGh0IyvZyIYM9PQyULUKy7FRBoArbDcXA0UIQKOu1yVICjlARKkJFqAgVoSJUhIpQESpCRagIFaEiVISKUBEqQkWoCPUGChpizw57Q8lNCql5rCao4wAMGaDC2vw5R/BPunyLUXJIywqHAsdYa8LwnyT3/D7KXyQbg5BsoYL+BasXiZxmWx6SDYxItnoi2RSLZvswmo3WSLako9m8j2abQ5INIRnN1pmMZJNRRqkd6z/P4k5mrSVm1gAAAABJRU5ErkJggg=="
//           alt=""
//           style={{
//             width: 20,
//             height: 20,
//             borderRadius: 20,
//           }}
//         />
//       </div>
//     </div>
//   );
//}

export default App;
