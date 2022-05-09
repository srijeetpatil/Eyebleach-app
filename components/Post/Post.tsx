import { View, StyleSheet, Image, Text } from "react-native";
import Dots from "./svg/Dots";
import Like from "./svg/Like";
import { RegularText, SemiBoldText, RegularTextLight } from "../Texts";

export default function Post(props) {
  const { profilePicture, image, name } = props;

  return (
    <View style={{ marginTop: 8 }}>
      <View style={styles.row}>
        <Image
          source={{
            uri: profilePicture,
          }}
          style={styles.profilePicture}
        />
        <View style={{ marginHorizontal: 8 }}>
          <SemiBoldText size={15}>{name}</SemiBoldText>
          <RegularTextLight size={14}>Sylhet, Bangladesh</RegularTextLight>
        </View>
        <Dots />
      </View>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      ></Image>
      <View
        style={{ ...styles.row, marginHorizontal: 10, alignItems: "center" }}
      >
        <Like />
        <View style={{ marginHorizontal: 10 }}>
          <RegularText>6.2k</RegularText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 42,
  },
  image: {
    width: "auto",
    height: 200,
    borderRadius: 12,
  },
  row: { flexDirection: "row", marginVertical: 15 },
});
