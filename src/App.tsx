import { Canvas } from "@react-three/fiber";
import Icons from "./components/Icon";

function App() {
  return (
    <main>
      <div className="o-container">
        <p>Hello World!</p>
        <Icons type="cog" size={100} />
      </div>
      <Canvas>
        <color attach="background" args={["transparant"]} />
      </Canvas>
    </main>
  );
}

export default App;
