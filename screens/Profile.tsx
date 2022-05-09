import { Image, StyleSheet, View } from "react-native";
import NavigationLayout from "../layouts/NavigationLayout";

export default function Profile(props) {
  const { navigation } = props;
  return (
    <NavigationLayout navigation={navigation}>
      <Image
        source={{
          uri: "https://www.gardeningknowhow.com/wp-content/uploads/2020/12/lonely-japanese-cherry.jpg",
        }}
        style={{
          width: "100%",
          height: 200,
        }}
      />
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://i.pinimg.com/564x/a0/2e/19/a02e19ea25f84f04084477900a50ac3b.jpg",
          }}
          style={{ width: 100, height: 100, borderRadius: 102 }}
        />
      </View>
    </NavigationLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    flexDirection: "column",
    alignItems: "center",
    elevation: 1,
    position: "absolute",
    width: "100%",
    top: 150,
  },
});
