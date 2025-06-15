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
      navigationTheme: "dark", //? use this for navigation if we use more than two themes
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "theme",
      storage: createJSONStorage(() => zustandMMKVStorage),
    }
  )
);
