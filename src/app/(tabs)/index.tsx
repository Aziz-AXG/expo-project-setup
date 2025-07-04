import { Button, Image } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { settingsStorage } from "@/db/mmkv";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "@/i18n";

export default function HomeScreen() {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;

  useEffect(() => {
    const loadLanguage = () => {
      const savedLanguage = settingsStorage.getString("language");
      if (savedLanguage) {
        i18n.changeLanguage(savedLanguage);
      }
    };
    loadLanguage();
  }, [i18n]);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          className="h-[178px] w-[290px] bottom-0 left-0 absolute"
        />
      }
    >
      <ThemedView className="flex-row items-center gap-2">
        <ThemedText type="title" className="animate-bounce font-bold text-3xl"> {t("hello")}!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView>
        <Button
          title="english"
          onPress={() => changeLanguage("en-US")}
          color={currentLanguage === "en-US" ? "#1D3D47" : "gray"}
        />
        <Button
          title="عربي"
          onPress={() => changeLanguage("ar-IQ")}
          color={currentLanguage === "ar-IQ" ? "#1D3D47" : "gray"}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}
