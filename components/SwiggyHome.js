import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
} from "react-native";
import TopBar from "./TopBar";
import Left from "./Left";
import Right from "./Right";
import { FontAwesome } from "@expo/vector-icons";

const SwiggyHome = () => {
  return (
    <SafeAreaView>
      <TopBar number={1} />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: "15px",
          marginTop: "20px",
          marginBottom: "10px"
        }}
      >
        <View>
          <Text
            style={{
              color: "#e81c4c",
              fontSize: "14px",
              fontFamily: "sans-serif",
            }}
          >
            Say hi to
          </Text>
          <Text
            style={{
              color: "#0f493f",
              fontFamily: "Verdana",
              fontWeight: 700,
              fontSize: "22px",
              marginTop: "5px",
              letterSpacing : "1.2px"
            }}
          >
            InsanelyGood
          </Text>
          <Text
            style={{
              color: "grey",
              fontSize: "14px",
              fontFamily: "sans-serif",
              marginTop: "5px",
            }}
          >
            Freshely handmade Paneer{" "}
          </Text>

          <Text
            style={{
              color: "grey",
              fontSize: "14px",
              fontFamily: "sans-serif",
            }}
          >
            stoneground batter & more!
          </Text>
          <Pressable style={styles.button}>Shop Now</Pressable>
        </View>
        <Image source={require("../assets/home-1.png")} style={styles.image} />
      </View>

      <View
        style={{
          flexDirection: "row",
          marginHorizontal: "15px",
          justifyContent: "space-between",
        }}
      >
        <Left />
        <Right />
      </View>
    </SafeAreaView>
  );
};

export default SwiggyHome;

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    width: "400px",
    maxHeight: "150px",
    marginBottom: 0,
  },
  button: {
    width: "60%",
    backgroundColor: "#e81c4c",
    color: "white",
    fontFamily: "sans-serif",
    paddingHorizontal: "15px",
    paddingVertical: "10px",
    borderRadius: "10px",
    marginTop: "10px",
    fontSize: "15px",
    fontWeight: 600,
  },
});
