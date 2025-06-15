import { Text, type TextProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor();

  const getTypeClasses = () => {
    switch (type) {
      case "default":
        return "text-base leading-6";
      case "defaultSemiBold":
        return "text-base leading-6 font-semibold";
      case "title":
        return "text-3xl font-bold leading-8";
      case "subtitle":
        return "text-xl font-bold";
      case "link":
        return "text-base leading-[30px] text-[#b44592]";
      default:
        return "";
    }
  };

  return (
    <Text
      style={[{ color: color.text }, style]}
      className={getTypeClasses()}
      {...rest}
    />
  );
}
