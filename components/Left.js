import { StyleSheet, View, Text, Pressable, Image } from "react-native";

const Left = () => {
  return (
    <View style={{ width: "48%" }}>
      <View style={styles.card1}>
        <Pressable>
          <Text style={{ fontWeight: "700", color: "black", fontSize: "16px", fontFamily : "sans-serif", letterSpacing : "-0.5px" }}>
            FOOD DELIVERY
          </Text>
          <Text style={{ fontWeight: "400", color: "grey", fontSize : "13px", fontFamily : "sans-serif", marginTop : "5px" }}>FOOD FIESTA</Text>
          <Text style={styles.dealText}>UP TO 60% OFF + FREE DEL</Text>
          <Image
            source={require("../assets/bowl-1.jpg")}
            style={styles.cardImage1}
          />
        </Pressable>
      </View>

      <View style={styles.card2}>
        <Pressable>
          <Text
            style={{
              fontWeight: "700",
              color: "black",
              fontSize: "18px",
              letterSpacing: "-0.5px",
              marginTop: "5px",
            }}
          >
            DINEOUT
          </Text>
          <Text style={{ fontWeight: "400", color: "grey", marginTop: "5px" }}>
            GIRF DINING FESTIVAL
          </Text>
          <Text style={styles.dealText}>FLAT 50% OFF</Text>
          <Image
            source={require("../assets/bowl-1.jpg")}
            style={styles.cardImage2}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Left;

const styles = StyleSheet.create({
  card1: {
    paddingLeft: "15px",
    paddingTop: "15px",
    backgroundColor: "white",
    height: "230px",
    position: "relative",
    overflow: "hidden",
    zIndex: 1,
    borderRadius: "15px",
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
  cardImage1: {
    width: 150,
    height: 150,
    position: "absolute",
    right: -10,
    top : 95,
    zIndex: 0,
  },
  card2: {
    paddingLeft: "15px",
    paddingTop: "15px",
    marginTop : "20px",
    backgroundColor: "white",
    height: "170px",
    position: "relative",
    overflow: "hidden",
    zIndex: 1,
    borderRadius: "15px",
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
  cardImage2: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 70,
    right: -5,
    zIndex: 0,
  },
  dealText: {
    color: "orange",
    fontFamily : "sans-serif",
    fontSize: "10px",
    fontWeight: "600",
    marginTop : "5px",
  },
});
