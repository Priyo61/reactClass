import { use } from "react";
import { useState, useEffect } from "react";

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
      </Card>
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
