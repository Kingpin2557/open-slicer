import { Canvas } from "@react-three/fiber";
import IconField from "./components/IconField";

function App() {
  return (
    <main>
      <div className="o-container">
        <p>Hello World!</p>
        <IconField type="cog" size={20} />
      </div>
      <Canvas>
        <color attach="background" args={["transparant"]} />
      </Canvas>
    </main>
  );
}

export default App;
