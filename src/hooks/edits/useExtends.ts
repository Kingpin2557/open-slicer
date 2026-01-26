import { useBaseTool } from "../useBaseTools";

export function useExtends(hookName: string, shortCut: string) {
  const extendLogic = () => {
    console.log("Custom logic for EXTENDING meshes...");
  };

  return useBaseTool(hookName, shortCut, extendLogic);
}
