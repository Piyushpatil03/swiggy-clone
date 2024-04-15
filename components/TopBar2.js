import { Image, StyleSheet, Text, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { Octicons } from "@expo/vector-icons";

const TopBar2 = () => {
  return (
    <View style = {{ backgroundColor : "#f7dcee"}}>
      <View style={styles.container}>
        {/* Time */}

        <View style= {{ paddingHorizontal : "10px", paddingVertical : "4px", backgroundColor : "#ff5319", alignItems : "center", borderRadius : "10px"}}>
            <Text style={{ color : "white", fontSize : "22px", fontWeight : "700", fontFamily : "sans-serif"}}>9</Text>
            <Text style={{ color : "white", fontSize : "12px", fontWeight : "500"}}>MINS</Text>
        </View>



        {/* Title and address */}
        <View style={{ width: "75%", marginLeft : "10px" }}>
          <View style={{ flexDirection: "row"}}>
            <Text style={styles.title} numberOfLines={1}>
              Delivery to Salarpuriya Sattva City in India
            </Text>
            <Ionicons
              name="chevron-down"
              size={15}
              color="#424242"
              style={{ marginTop: "5px" }}
            />
          </View>
          <View>
            <Text style={styles.address} numberOfLines={1}>
            Kudlu Main Rd, Muneshwara Nagar, Hyberabad
            </Text>
          </View>
        </View>

        {/* User and one image */}
        <View style={{ flexDirection: "row", alignContent: "center", marginLeft : "10px" }}>
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
        <TextInput style={styles.textinput} placeholder="Search for 'Paneer'" />
        <Octicons name="search" size={24} color="grey" />
        <View style={styles.verticalLine}></View>
        <FontAwesome name="microphone" size={24} color="#ff5319" />
      </View>
    </View>
  );
};

export default TopBar2;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: "15px",
  },
  title: {
    fontSize: "20px",
    fontWeight: "600",
    fontFamily: "Verdana",
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
    backgroundColor : "white",
    borderColor: "grey",
    borderWidth: "1px",
    borderRadius: "10px",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    marginHorizontal: "15px",
    marginTop: "10px",
    paddingVertical: "10px",
    marginBottom : 10
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
