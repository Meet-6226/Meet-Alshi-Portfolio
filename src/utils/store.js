import { create } from 'zustand';

export const useStore = create((set) => ({
  scrollPhase: 0,
  setScrollPhase: (phase) => set({ scrollPhase: phase }),
  hoveredProject: null,
  setHoveredProject: (projectId) => set({ hoveredProject: projectId }),
  activeProject: null,
  setActiveProject: (projectId) => set({ activeProject: projectId }),
}));
