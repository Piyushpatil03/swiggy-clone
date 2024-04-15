import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import TopBar2 from "./TopBar2";

const Instamart = () => {
  const data1 = [
    {
      id: "01",
      image: require("../assets/product-1.png"),
      title: "Cooking Care",
    },
    {
      id: "02",
      image: require("../assets/product-2.png"),
      title: "Home Care",
    },
    {
      id: "03",
      image: require("../assets/product-1.png"),
      title: "Personal Care",
    },
    {
      id: "04",
      image: require("../assets/product-2.png"),
      title: "Health Care",
    },
    {
      id: "05",
      image: require("../assets/product-1.png"),
      title: "Kitchen Care",
    },
  ];

  const data2 = [
    {
      id: "01",
      image: require("../assets/product-2.png"),
      title: "Cooking Care",
    },
    {
      id: "02",
      image: require("../assets/product-1.png"),
      title: "Home Care",
    },
    {
      id: "03",
      image: require("../assets/product-2.png"),
      title: "Personal Care",
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: 120,
          height: 120,
          marginTop: 20,
        }}
      >
        <View
          style={{
            backgroundColor: "#f7dcee",
            borderRadius: "20px",
            overflow: "hidden",
            zIndex: 1,
          }}
        >
          <Image
            source={item.image}
            style={{
              height: 90,
              width: 90,
              resizeMode: "contain",
              marginHorizontal: "10px",
              zIndex: 0,
            }}
          />
        </View>
        <Text
          style={{
            width: 100,
            marginTop: 5,
            fontFamily: "verdana",
            textAlign: "center",
          }}
        >
          {item.title}
        </Text>
      </View>
    );
  };

  const renderBigItem = ({ item, index }) => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: 160,
          height: 220,
          backgroundColor: "#85155f",
          borderRadius: "20px",
          overflow: "hidden",
          zIndex: 1,
          marginHorizontal : 10,
        }}
      >
        <Text style = {{ color : "white", fontSize : "12px"}}>25% OFF</Text>
        <Text style = {{ color : "white", fontSize : "24px", fontWeight : "700"}}>SAVE 100</Text>
        <Image
          source={item.image}
          style={{
            height: 150,
            width: 150,
            resizeMode: "contain",
            marginHorizontal: "10px",
            zIndex: 0,
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <TopBar2 />

      <View
        style={{
          flex: 1,
          alignItems: "center",
          paddingTop: "25px",
          marginBottom: "10px",
        }}
      >
        <Text
          style={{
            fontSize: "15px",
            fontFamily: "sans-serif",
            color: "#85155f",
          }}
        >
          Sale Live Now
        </Text>
        <Text
          style={{
            fontSize: "22px",
            fontFamily: "verdana",
            fontWeight: "700",
            letterSpacing: "1px",
            marginTop: "5px",
            color: "#85155f",
          }}
        >
          MEGA SAVINGS FESTIVAL
        </Text>
        <View>
          <Pressable
            style={{
              width: 150,
              padding: 10,
              borderColor: "#85155f",
              borderRadius: "10px",
              marginTop: "10px",
              borderWidth: 1,
              color: "#85155f",
              fontWeight: "600",
              fontFamily: "sans-serif",
              marginBottom: "10px",
            }}
          >
            UP TO 50% OFF
          </Pressable>
        </View>
      </View>

      <FlatList
        data={data1}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: "50px", marginBottom: 0 }}
      ></FlatList>

      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#f7dcee",
          paddingVertical: 15,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#85155f", fontWeight: 700 }}>
          FREE 1KG SUGAR{" "}
        </Text>
        <Text>on all Orders above Rs. 999</Text>
      </View>

      <View>
        <Text
          style={{
            fontFamily: "verdana",
            fontWeight: "800",
            letterSpacing: "1px",
            fontSize: "20px",
            color: "#85155f",
            marginVertical: 15,
            textAlign: "center",
          }}
        >
          BEST PRICES, ALWAYS!
        </Text>
      </View>

      <FlatList
        data={data2}
        renderItem={renderBigItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: "10px", marginBottom: 0 }}
      ></FlatList>
    </SafeAreaView>
  );
};

export default Instamart;
