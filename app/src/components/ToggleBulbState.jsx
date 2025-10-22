export default function ToggleBulbState({ setBulbOn }) {
  function toggle() {
    setBulbOn((curr) => !curr);
  }

  return (
    <div>
      <button onClick={toggle}>Toggle bulb</button>
    </div>
  );
}
