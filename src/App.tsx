import { Canvas } from "@react-three/fiber";
import Icons from "./components/Icons";

function App() {
  return (
    <main>
      <div className="o-container">
        <p>Hello World!</p>
        <Icons type="cog" size={100} />
      </div>
      <Canvas>
        <color attach="background" args={["#0ea5a4"]} />
      </Canvas>
    </main>
  );
}

export default App;
