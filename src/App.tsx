import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import IconField, { type HookName } from "./components/IconField";
import Toolbar from "./components/Toolbar";
import Button from "./components/Button";

import Slider from "rc-slider";
import { ProjectView, CodeViewer, Tabs } from "./components/views";
import "rc-slider/assets/index.css";
import keymapData from "./assets/keymap.json";

function App() {
  const [value, setValue] = useState(50);

  interface ToolbarItem {
    hookName: HookName;
    shortcut: string;
    type: string;
    description: string;
  }

  interface ToolbarGroup {
    isRow: boolean;
    items: ToolbarItem[];
  }

  const keymap = keymapData as { toolbars: ToolbarGroup[] };

  const myTabs = [
    { id: "project", label: "Project", Component: ProjectView },
    { id: "gcode", label: "G-Code", Component: CodeViewer },
  ];

  const sliderStyles = {
    handle: {
      borderColor: "var(--primary-color)",
      height: 20,
      width: 20,
      marginLeft: -8,
      backgroundColor: "var(--primary-color)",
    },
    rail: {
      backgroundColor: "var(--secondary-color)",
    },
    track: {
      backgroundColor: "var(--primary-color)",
    },
  };

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
          {keymap.toolbars.map((toolbarGroup: ToolbarGroup, toolbarIndex) => (
            <Toolbar key={toolbarIndex} isRow={toolbarGroup.isRow}>
              {toolbarGroup.items.map((tool, itemIndex) => {
                return (
                  <IconField
                    key={itemIndex}
                    type={tool.type}
                    size={40}
                    hookName={tool.hookName}
                    shortCut={tool.shortcut}
                  />
                );
              })}
            </Toolbar>
          ))}
        </div>

        <div className="o-viewer">
          <div className="o-slider">
            <Slider
              vertical
              min={0}
              max={100}
              value={value}
              onChange={handleSliderChange}
              styles={sliderStyles}
            />
          </div>

          <div className="o-sidebar">
            <Tabs items={myTabs} />
            <Button
              label="Slice now!"
              event={() => console.log("Clicking Button")}
            />
          </div>
        </div>
      </div>
      <Canvas>
        <color attach="background" args={["grey"]} />
      </Canvas>
    </main>
  );
}

export default App;
