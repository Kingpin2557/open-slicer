import { useBaseTool } from "../useBaseTools";

export function useSelection(hookName: string, shortCut: string) {
  const selectionLogic = () => {
    console.log("Custom logic for SELECTING meshes...");
  };

  return useBaseTool(hookName, shortCut, selectionLogic);
}
