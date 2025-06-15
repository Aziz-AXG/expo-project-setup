import { MMKV } from "react-native-mmkv";
import { StateStorage } from "zustand/middleware";

export const settingsStorage = new MMKV({
  id: "settingsStorage",
});

export const zustandMMKVStorage: StateStorage = {
  setItem: (name: string, value: any) => {
    settingsStorage.set(name, JSON.stringify(value));
  },
  getItem: (name: string) => {
    const value = settingsStorage.getString(name);
    return value ? JSON.parse(value) : null;
  },
  removeItem: (name: string) => {
    settingsStorage.delete(name);
  },
};
