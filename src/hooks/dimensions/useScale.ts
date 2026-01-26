import { useBaseTool } from "../useBaseTools";

export function useScale(hookName: string, shortCut: string) {
  const scaleLogic = () => {
    console.log("Custom logic for SCALING meshes...");
  };

  return useBaseTool(hookName, shortCut, scaleLogic);
}
