// @ts-nocheck
import { create } from "zustand";

const useStore = create((set) => ({
  toggle: true,
  updateToggle: () => set((state) => ({ toggle: false })),
}));

export default useStore;
