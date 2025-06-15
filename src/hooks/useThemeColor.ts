import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export function useThemeColor() {
  const theme = useColorScheme() ?? "dark";
  return Colors[theme];
}
