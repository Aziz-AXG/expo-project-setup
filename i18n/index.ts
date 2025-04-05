import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import translationEn from "./locales/en-US/translation.json";
import translationAr from "./locales/ar-iq/translation.json";
import { settingsStorage } from "@/db/mmkv";
import { I18nManager, Platform } from "react-native";
import reload from "@/utils/reload";

const resources = {
  "en-US": { translation: translationEn },
  "ar-IQ": { translation: translationAr },
};

const initI18n = async () => {
  i18n.use(initReactI18next).init({
    compatibilityJSON: "v4",
    resources,
    lng: "ar-IQ",
    fallbackLng: "ar-IQ",
    interpolation: {
      escapeValue: false,
    },
  });
};

export const loadLanguage = async () => {
  let savedLanguage = settingsStorage.getString("language");

  if (!savedLanguage) {
    savedLanguage = Localization.getLocales()[0].languageTag;
  }

  if (Platform.OS === "web") {
    document.body.setAttribute(
      "dir",
      savedLanguage.includes("ar") ? "rtl" : "ltr"
    );
  }

  i18n.changeLanguage(savedLanguage);
};

export const changeLanguage = async (lang: string) => {
  settingsStorage.set("language", lang);
  i18n.changeLanguage(lang).then(() => {
    if (lang.includes("ar")) {
      I18nManager.allowRTL(true);
      I18nManager.forceRTL(true);
      if (Platform.OS === "web") {
        document.body.setAttribute("dir", "rtl");
      }
      settingsStorage.set("isRTL", true);
    } else {
      I18nManager.allowRTL(false);
      I18nManager.forceRTL(false);
      if (Platform.OS === "web") {
        document.body.setAttribute("dir", "ltr");
      }
      settingsStorage.set("isRTL", false);
    }
  });
  reload();
};

initI18n();

export default i18n;
