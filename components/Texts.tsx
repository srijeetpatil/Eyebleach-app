import { Text } from "react-native";
import {
  SourceSansPro_400Regular,
  SourceSansPro_400Regular_Italic,
  SourceSansPro_600SemiBold,
  SourceSansPro_600SemiBold_Italic,
} from "@expo-google-fonts/source-sans-pro";
import { useFonts } from "expo-font";

export function RegularText(props) {
  let [fontsLoaded, err] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_400Regular_Italic,
  });
  return (
    <Text
      style={
        fontsLoaded
          ? {
              fontFamily: "SourceSansPro_400Regular",
              fontSize: props.size || 15,
            }
          : {}
      }
    >
      {props.children}
    </Text>
  );
}

export function RegularTextLight(props) {
  let [fontsLoaded, err] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_400Regular_Italic,
  });
  return (
    <Text
      style={
        fontsLoaded
          ? {
              fontFamily: "SourceSansPro_400Regular",
              fontSize: props.size || 15,
              color: "#525252",
            }
          : {}
      }
    >
      {props.children}
    </Text>
  );
}

export function SemiBoldText(props) {
  let [fontsLoaded, err] = useFonts({
    SourceSansPro_600SemiBold,
    SourceSansPro_600SemiBold_Italic,
  });
  return (
    <Text
      style={
        fontsLoaded
          ? {
              fontFamily: "SourceSansPro_600SemiBold",
              fontSize: props.size || 15,
            }
          : {}
      }
    >
      {props.children}
    </Text>
  );
}
