import * as Updates from "expo-updates";
import { Platform } from "react-native";

const reload = () => {
  if (Platform.OS === "web") {
    //? we dont need to reload on web for dir change
    // if (typeof window !== "undefined") {
    //   window.location.reload();
    // }
  } else {
    if (!__DEV__) {
      Updates.reloadAsync();
    } else {
    
    }
  }
};

export default reload;
