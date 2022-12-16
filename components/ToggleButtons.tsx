import { useBoolean } from "../hooks/useBoolean";

const ToggleButtons = () => {
  const [isToggle, { toggle, setBoolean }] = useBoolean(false);

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <br />
      <button onClick={() => setBoolean(true)}>Set to true</button>
      <br />
      <button onClick={() => setBoolean(false)}>Set to false</button>
      {isToggle ? "On" : "Off"}
    </div>
  );
};
export default ToggleButtons;
