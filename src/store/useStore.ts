import { create } from "zustand";

interface AppState {
  name: string;
  setName: (name: string) => void;
}

export const useStore = create<AppState>((set) => ({
  name: "",
  setName: (name: string) => set({ name }),
}));

if (typeof window !== "undefined") {
  const storedName = localStorage.getItem("userName");
  if (storedName) {
    useStore.setState({ name: storedName });
  }
}
