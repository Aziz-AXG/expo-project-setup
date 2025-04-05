import { useThemeStore } from "@/store/themeStore";
import { useEffect, useState } from "react";

/**
 * To support static rendering, this value needs to be re-calculated on the client side for web
 */
export function useColorScheme() {
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  const { theme } = useThemeStore();

  if (hasHydrated) {
    return theme;
  }

  return "light";
}
