import { Path, Svg, G } from "react-native-svg";

export default function Home(props) {
  const { navigation } = props;
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 24 24"
      onPress={() => navigation.navigate("Home")}
    >
      <G id="home-Filled">
        <Path
          fill="#3a3a3a"
          id="home-Filled-2"
          data-name="home-Filled"
          d="M21.5,11.01V17A4.5,4.5,0,0,1,17,21.5H14.5V17a2.5,2.5,0,0,0-5,0V21.5H7A4.5,4.5,0,0,1,2.5,17V11.01a4.477,4.477,0,0,1,1.678-3.5l5-4.018a4.529,4.529,0,0,1,5.643,0l5,4.018A4.475,4.475,0,0,1,21.5,11.01Z"
        />
      </G>
    </Svg>
  );
}
