import { useBaseTool } from "../useBaseTools";

export function useSubtract(hookName: string, shortCut: string) {
  const subtractLogic = () => {
    console.log("Custom logic for SUBTRACTING meshes...");
  };

  return useBaseTool(hookName, shortCut, subtractLogic);
}
