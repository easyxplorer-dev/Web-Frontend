import { Package } from "src/types/Package";
import { create } from "zustand";
import { Data } from "src/data/Packages";

type State = {
  packages: Package[];
  getPackages: () => void;
};

export const usePackagesStore = create<State>((set) => {
  return {
    packages: Data,
    getPackages: () => set({ packages: Data }),
  };
});
