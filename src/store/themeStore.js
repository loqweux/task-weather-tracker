import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create(
  persist(
    (set) => ({
      dark: false,
      setDark: (dark) => set({ dark }),
      toggleTheme: () => set((state) => ({ dark: !state.dark })),
    }),
    {
      name: "theme-storage",
      onRehydrateStorage: () => (state) => {
        if (state) {
          document.body.dataset.theme = state.dark ? "dark" : "light";
        }
      },
    }
  )
);
