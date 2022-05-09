import { View, StyleSheet } from "react-native";
import { Path, Svg, G } from "react-native-svg";

export default function Dots() {
  return (
    <View style={styles.circle}>
      <Svg id="Capa_1" width={10} height={10} viewBox="0 0 342.382 342.382">
        <G>
          <G>
            <G>
              <Path
                d="M45.225,125.972C20.284,125.972,0,146.256,0,171.191c0,24.94,20.284,45.219,45.225,45.219
            c24.926,0,45.219-20.278,45.219-45.219C90.444,146.256,70.151,125.972,45.225,125.972z"
                fill="#3a3a3a"
              />
            </G>
            <G>
              <Path
                d="M173.409,125.972c-24.938,0-45.225,20.284-45.225,45.219c0,24.94,20.287,45.219,45.225,45.219
            c24.936,0,45.226-20.278,45.226-45.219C218.635,146.256,198.345,125.972,173.409,125.972z"
                fill="#3a3a3a"
              />
            </G>
            <G>
              <Path
                d="M297.165,125.972c-24.932,0-45.222,20.284-45.222,45.219c0,24.94,20.29,45.219,45.222,45.219
            c24.926,0,45.217-20.278,45.217-45.219C342.382,146.256,322.091,125.972,297.165,125.972z"
                fill="#3a3a3a"
              />
            </G>
          </G>
        </G>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    padding: 5,
    alignSelf: "center",
    borderRadius: 22,
    borderColor: "#e5e5e5",
    borderStyle: "solid",
    borderWidth: 1,
    marginLeft: "auto",
    marginRight: 15,
  },
});
