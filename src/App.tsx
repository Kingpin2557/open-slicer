import { Canvas } from "@react-three/fiber";
import IconField from "./components/IconField";

function App() {
  return (
    <main>
      <div className="o-container">
        <IconField type="cog" size={20} />
        <p>Hello World!</p>
      </div>
      <Canvas>
        <color attach="background" args={["transparant"]} />
      </Canvas>
    </main>
  );
}

export default App;
