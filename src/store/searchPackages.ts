import { Package } from "src/types/Package";
import { Data } from "src/data/Packages";
import { create } from "zustand";

type State = {
  packages: Package[];
  query: string;
  setQuery: (query: string) => void;
  setPackages: (packages: Package[]) => void;
};

export const useSearchStore = create<State>((set, get) => {
  return {
    packages: Data,
    query: "",
    setQuery: (query: string) => set({ query }),
    setPackages: (packages: Package[]) => {
      const { query } = get();
      const filtered = packages.filter((pack) =>
        pack.name.toLowerCase().includes(query.toLowerCase())
      );
      return set({ packages: filtered });
    },
  };
});
