import { FlatList, View } from "react-native";
import Post from "../components/Post/Post";
import NavigationLayout from "../layouts/NavigationLayout";

export default function Main(props) {
  const { navigation } = props;

  const renderItem = ({ item }: any) => {
    return (
      <View
        style={{
          marginBottom: data.indexOf(item) === data.length - 1 ? 150 : 0,
          marginHorizontal: 8,
        }}
      >
        <Post
          profilePicture={item.profilePicture}
          image={item.image}
          name={item.name}
        />
      </View>
    );
  };

  return (
    <NavigationLayout navigation={navigation}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 62 }}
      ></FlatList>
    </NavigationLayout>
  );
}

const data = [
  {
    profilePicture:
      "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427",
    image:
      "https://static.onecms.io/wp-content/uploads/sites/28/2016/11/airplane-wing-seat-SMOOTH1116.jpg",
    name: "Ava Sadie",
    id: "1",
  },
  {
    profilePicture:
      "https://i.pinimg.com/564x/a0/2e/19/a02e19ea25f84f04084477900a50ac3b.jpg",
    image:
      "https://previews.123rf.com/images/tbralnina/tbralnina1811/tbralnina181100328/112753594-fried-chicken-wings-with-various-sauces-top-view-.jpg",
    name: "Ava Sadie",
    id: "2",
  },
  {
    profilePicture:
      "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427",
    image:
      "https://i.pinimg.com/564x/1c/b0/a8/1cb0a8b3b935d17e9196ecaeed2694f1.jpg",
    name: "Ava Sadie",
    id: "3",
  },
];
