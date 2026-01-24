import { Canvas } from "@react-three/fiber";
import IconField from "./components/IconField";
import Toolbar from "./components/Toolbar";
import {
  useExtends,
  useMove,
  useRotate,
  useSelection,
  useSubtract,
  useScale,
} from "./hooks/index";
import Button from "./components/Button";

function App() {
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
