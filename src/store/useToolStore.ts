import { create } from "zustand";

interface ToolState {
  activeTool: string | null;
  setActiveTool: (toolName: string | null) => void;
}

export const useToolStore = create<ToolState>((set) => ({
  activeTool: null,
  setActiveTool: (toolName) => set({ activeTool: toolName }),
}));
