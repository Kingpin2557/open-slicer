import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import IconField from "./components/IconField";
import Toolbar from "./components/Toolbar";
import Button from "./components/Button";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import { useMove, useRotate, useScale } from "./hooks/dimensions/transforms";
import { useExtends, useSelection, useSubtract } from "./hooks/edits/edit";

function App() {
  const [value, setValue] = useState(50);

  const handleStyle = {
    borderColor: "#007bff",
    height: 20,
    width: 20,
    marginLeft: -8,
    backgroundColor: "#fff",
  };

  const trackStyle = { backgroundColor: "#007bff" };

  function handleSliderChange(val: number | number[]) {
    if (typeof val === "number") {
      setValue(val);
    }
  }

  console.log("Rendering App with slider value:", value);
  return (
    <main>
      <div className="o-container">
        <div className="o-tools">
          <Toolbar isRow={false}>
            <IconField type="move" size={40} event={useMove} />
            <IconField type="scale" size={40} event={useScale} />
            <IconField type="rotate" size={40} event={useRotate} />
          </Toolbar>
          <Toolbar isRow={false}>
            <IconField type="extend" size={40} event={useExtends} />
            <IconField type="subtract" size={40} event={useSubtract} />
            <IconField type="selection" size={40} event={useSelection} />
          </Toolbar>
        </div>

        <div className="o-viewer">
          <Slider
            vertical
            min={0}
            max={100}
            value={value}
            onChange={handleSliderChange}
            trackStyle={trackStyle}
            handleStyle={handleStyle}
          />
          <Button label="Export" event={() => console.log("Clicking Button")} />
        </div>
      </div>
      <Canvas>
        <color attach="background" args={["transparant"]} />
      </Canvas>
    </main>
  );
}

export default App;
