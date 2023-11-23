import { useState } from "react";
import Buttons from "./components/Buttons";
// import "./App.css";

function App() {
  const [color, setColor] = useState("");

  function handleColorChanger(colour) {
    setColor(colour);
  }

  return (
    <div className="w-full h-screen duration-200" style={{ background: color }}>
      <div className="fixed flex flex-row flex-wrap justify-center bottom-12 inset-x-3 px-2">
        <div className="flex flex-wrap justify-center gap-3 rounded-3xl shadow-lg bg-white px-3 py-2 ">
          {/* create buttons in a old way */}
          {/* <button
            onClick={() => handleColorChanger("red")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button> */}

          {/* Button is a components */}
          <Buttons onColorChange={handleColorChanger} colour={"red"}>
            Red
          </Buttons>
          <Buttons onColorChange={handleColorChanger} colour={"green"}>
            Green
          </Buttons>
          <Buttons onColorChange={handleColorChanger} colour={"blue"}>
            Blue
          </Buttons>
          {/* <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
