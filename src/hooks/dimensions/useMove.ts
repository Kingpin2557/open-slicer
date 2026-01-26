import { useBaseTool } from "../useBaseTools";

export function useMove(hookName: string, shortCut: string) {
  const moveLogic = () => {
    console.log("Custom logic for MOVING meshes...");
  };

  return useBaseTool(hookName, shortCut, moveLogic);
}
