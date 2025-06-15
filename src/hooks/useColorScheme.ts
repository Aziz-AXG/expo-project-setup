import { useThemeStore } from "@/store/themeStore";
import { useColorScheme as useRNColorScheme } from "react-native";

export const useColorScheme = () => {
  const deviceScheme = useRNColorScheme();

  const { theme } = useThemeStore();

  return theme || deviceScheme;
};
