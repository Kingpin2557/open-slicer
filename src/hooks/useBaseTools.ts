import { useEffect } from "react";
import { useToolStore } from "../store/useToolStore";
import { isShortcutMatched } from "../scripts/utils/keyboard";

export function useBaseTool(
  hookName: string,
  shortCut: string,
  actionLogic?: () => void,
) {
  const { activeTool, setActiveTool } = useToolStore();
  const isActive = activeTool === hookName;

  const handleAction = () => {
    const nextState = isActive ? null : hookName;
    setActiveTool(nextState);
    if (nextState) actionLogic?.();
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const isInput =
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement;

      if (!isInput && isShortcutMatched(e, shortCut)) {
        e.preventDefault();
        handleAction();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  return { handleAction, isActive };
}
