import { zustandMMKVStorage } from "@/db/mmkv";
import { ColorSchemeName } from "react-native";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ThemeStore {
  theme: ColorSchemeName;
  navigationTheme: ColorSchemeName;
  setTheme: (theme: ColorSchemeName) => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "dark",
      navigationTheme: "dark",
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "theme",
      storage: createJSONStorage(() => zustandMMKVStorage),
    }
  )
);
