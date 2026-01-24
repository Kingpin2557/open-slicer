import { Canvas } from "@react-three/fiber";
import IconField from "./components/IconField";
import Toolbar from "./components/Toolbar";

function App() {
  return (
    <main>
      <div className="o-container">
        <div className="o-tools">
          <Toolbar isRow={false}>
            <IconField type="move" size={40} />
            <IconField type="scale" size={40} />
            <IconField type="rotate" size={40} />
          </Toolbar>
          <Toolbar isRow={false}>
            <IconField type="extend" size={40} />
            <IconField type="subtract" size={40} />
            <IconField type="selection" size={40} />
          </Toolbar>
        </div>

        <p>Hello World!</p>
      </div>
      <Canvas>
        <color attach="background" args={["transparant"]} />
      </Canvas>
    </main>
  );
}

export default App;
