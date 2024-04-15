import { Image, StyleSheet, Text, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { Octicons } from "@expo/vector-icons";

const TopBar = ({ number }) => {
  const data = {
    1: {
      title: "Cadenza",
      address: "1902, Calypso, Cadenza, Kudlu Main Road, Cadenza",
    },
    2: {
      title: "Salarpuriya Sattva Cadenza karnataka",
      address: "Kudlu Main Rd, Muneshwara Nagar, Hyberabad",
    },
  };

  const selectedData = data[number];
  return (
    <View>
      <View style={styles.container}>
        {/* Title and address */}
        <View style={{ width: "65%" }}>
          <View style={{ flexDirection: "row", alignContent: "center" }}>
            <FontAwesome6 name="location-arrow" size={24} color="#ff5319" />
            <Text style={styles.title} numberOfLines={1}>{selectedData.title}</Text>
            <Ionicons
              name="chevron-down"
              size={15}
              color="#424242"
              style={{ marginTop: "5px" }}
            />
          </View>
          <View>
            <Text style={styles.address} numberOfLines={1}>
              {selectedData.address}
            </Text>
          </View>
        </View>

        {/* User and one image */}
        <View style={{ flexDirection: "row", alignContent: "center" }}>
          <Image
            source={require("../assets/one-icon.png")}
            style={styles.image}
          />{" "}
          <FontAwesome6
            name="user-large"
            size={24}
            color="black"
            style={{ marginTop: "5px" }}
          />
        </View>
      </View>

      {/* Search bar */}
      <View style={styles.searchBar}>
        <TextInput style={styles.textinput} placeholder="Search for 'Pizza'" />
        <Octicons name="search" size={24} color="grey" />
        <View style={styles.verticalLine}></View>
        <FontAwesome name="microphone" size={24} color="#ff5319" />
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "15px",
  },
  title: {
    fontSize: "20px",
    fontWeight: "600",
    fontFamily: "Verdana",
    marginLeft: "10px",
    marginRight: "5px",
    letterSpacing: "-0.5px",
  },
  address: {
    color: "grey",
    marginTop: "5px",
  },
  image: {
    width: "70px",
    maxHeight: "40px",
    objectFit: "contain",
    marginRight: "10px",
  },
  searchBar: {
    borderColor: "grey",
    borderWidth: "1px",
    borderRadius: "10px",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    marginHorizontal: "15px",
    marginTop: "10px",
    paddingVertical: "10px",
  },
  textinput: {
    padding: "12px",
    outlineStyle: "none",
    width: "80%",
    color: "grey",
    fontFamily: "Verdana",
  },
  verticalLine: {
    marginHorizontal: "10px",
    height: "70%",
    width: 1,
    backgroundColor: "#b3b3b3",
  },
});
