import { SafeAreaView, View, Dimensions } from "react-native";
import FooterMain from "../components/Footer/FooterMain";
import MainHeader from "../components/Header/MainHeader";

export default function NavigationLayout(props) {
  const { navigation } = props;

  return (
    <SafeAreaView style={{ height: Dimensions.get("window").height }}>
      <MainHeader />
      <View>{props.children}</View>
      <FooterMain navigation={navigation} />
    </SafeAreaView>
  );
}
