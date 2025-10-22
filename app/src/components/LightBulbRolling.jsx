import { useState } from "react";
import BulbState from "./BulbState";
import ToggleBulbState from "./ToggleBulbState";
export default function LightBulbRolling() {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <div>
      <BulbState bulbOn={bulbOn}></BulbState>
      <ToggleBulbState setBulbOn={setBulbOn}></ToggleBulbState>
    </div>
  );
}
