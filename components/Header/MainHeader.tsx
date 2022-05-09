import { View, StyleSheet } from "react-native";
import Camera from "./svg/Camera";
import Messages from "./svg/Messages";

export default function MainHeader() {
  return (
    <View style={styles.header}>
      <Camera />
      <Messages />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingBottom: 12,
    paddingTop: 4,
    position: "absolute",
    top: 0,
    width: "100%",
  },
});
