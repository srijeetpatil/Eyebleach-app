import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { BlurView } from "expo-blur";
import Home from "./svg/Home";
import Search from "./svg/Search";
import Add from "./svg/Add";
import Alerts from "./svg/Alerts";

export default function FooterMain(props) {
  const { navigation } = props;

  return (
    <BlurView style={styles.footer} intensity={120} tint="light">
      <View style={styles.row}>
        <Home navigation={navigation} />
        <Search />
        <Add />
        <Alerts />
        <TouchableHighlight
          onPress={() => navigation.navigate("Profile")}
          style={styles.profilePicture}
        >
          <Image
            source={{
              uri: "https://i.pinimg.com/564x/a0/2e/19/a02e19ea25f84f04084477900a50ac3b.jpg",
            }}
            style={styles.profilePicture}
          />
        </TouchableHighlight>
      </View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 60,
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "100%",
  },
  profilePicture: {
    width: 25,
    height: 25,
    borderRadius: 26,
  },
});
