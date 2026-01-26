import Icon from "./Icon";
import { useMove, useScale, useRotate } from "../hooks/dimensions/transforms";
import { useExtends, useSelection, useSubtract } from "../hooks/edits/edit";

const hookMap = {
  useMove,
  useScale,
  useRotate,
  useExtends,
  useSubtract,
  useSelection,
};

export type HookName = keyof typeof hookMap;

type IconProps = {
  type: string;
  size: number;
  hookName: HookName;
  shortCut: string;
};

function IconField({ type, size, hookName, shortCut }: IconProps) {
  const hook = hookMap[hookName];

  const { handleAction, isActive } = hook(hookName, shortCut);

  return (
    <button
      className={`c-icon ${isActive ? "c-icon--active" : ""}`}
      aria-label={type}
      onClick={handleAction}
    >
      <Icon type={type} size={size} />
    </button>
  );
}

export default IconField;
