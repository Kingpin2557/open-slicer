export const isShortcutMatched = (
  e: KeyboardEvent,
  shortCut: string,
): boolean => {
  const parts = shortCut.toLowerCase().split("+");
  const key = parts.pop(); // The last part is always the key (e.g., "g")

  const needsCtrl = parts.includes("ctrl");
  const needsShift = parts.includes("shift");
  const needsAlt = parts.includes("alt");

  return (
    e.key.toLowerCase() === key &&
    e.ctrlKey === needsCtrl &&
    e.shiftKey === needsShift &&
    e.altKey === needsAlt
  );
};
