import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <main>
      <div className="o-container">
        <p>Hello World!</p>
      </div>
      <Canvas>
        <color attach="background" args={["#0ea5a4"]} />
      </Canvas>
    </main>
  );
}

export default App;
