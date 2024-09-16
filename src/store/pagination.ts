import { create } from "zustand";

type State = {
  page: number;
  setPage: (currentPage: number) => void;
};

export const usePaginationStore = create<State>((set) => {
  return {
    page: 1,
    setPage: (currentPage: number) => set({ page: currentPage }),
  };
});
