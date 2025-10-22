import { use } from "react";
import { useState, useEffect } from "react";
import Keys from "./components/Keys";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import IrilPage from "./components/Irilpage";
import IrilPageBody from "./components/IrilPageBody";
import LandingPage from "./components/LandingPage";
import ErrorPage from "./components/ErrorPage";
import LearnUseRef from "./components/LearnUseRef";
function App() {
  return (
    <>
      {/* <Card>
        <h2>Card Title</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorem
          voluptate quisquam minima quia enim facere, officiis corrupti deserunt
          quod a, blanditiis odio vitae tempora quis fugit iusto ducimus harum.
        </p>
        <input type="text" placeholder="add post here" />
        <button>Add post</button>
      </Card> */}
      <h1>Here am learning keys in react</h1>
      <Keys key={1} title={"got to gym"} done={true}></Keys>
      <Keys key={2} title={"eat food"} done={false}></Keys>
      <h1>Here am learning routing</h1>

      <div>
        <BrowserRouter>
          <Link to={"/"}>Home</Link>|<Link to={"/iril/footer"}>Footer</Link>|
          <Link to={"/iril/body"}>Body</Link>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/iril/footer" element={<IrilPage />} />
            <Route path="/iril/body" element={<IrilPageBody />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div>
        <h1>Here i am learning useRef</h1>
        <LearnUseRef></LearnUseRef>
      </div>
    </>
  );
}

// function Card({ children }) {
//   return (
//     <div
//       style={{
//         background: "black",
//         borderRadius: 5,
//         color: "gray",
//         padding: 3,
//       }}
//     >
//       {children}
//     </div>
//   );
// }
export default App;
