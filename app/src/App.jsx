import { use } from "react";
import { useState, useEffect } from "react";
import Keys from "./components/Keys";

function App() {
  return (
    <>
      <Card>
        <h2>Card Title</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorem
          voluptate quisquam minima quia enim facere, officiis corrupti deserunt
          quod a, blanditiis odio vitae tempora quis fugit iusto ducimus harum.
        </p>
        <input type="text" placeholder="add post here" />
        <button>Add post</button>
      </Card>
      <h1>Here am learning keys in react</h1>
      <Keys key={1} title={"got to gym"} done={true}></Keys>
      <Keys key={2} title={"eat food"} done={false}></Keys>
    </>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        background: "black",
        borderRadius: 5,
        color: "gray",
        padding: 3,
      }}
    >
      {children}
    </div>
  );
}
export default App;
