import { useBaseTool } from "../useBaseTools";

export function useRotate(hookName: string, shortCut: string) {
  const rotateLogic = () => {
    console.log("Custom logic for ROTATING meshes...");
  };

  return useBaseTool(hookName, shortCut, rotateLogic);
}
