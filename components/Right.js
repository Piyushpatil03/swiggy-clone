import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const Right = () => {
  return (
    <View style={{ width: "48%" }}>
      <View style={styles.card1}>
        <Pressable>
          <Text
            style={{
              fontWeight: "700",
              color: "black",
              fontSize: "16px",
              fontFamily: "sans-serif",
              letterSpacing: "-0.5px",
            }}
          >
            INSTAMART
          </Text>
          <Text
            style={{
              fontWeight: "400",
              color: "grey",
              fontSize: "13px",
              fontFamily: "sans-serif",
              marginTop: "5px",
            }}
          >
            INSTANT GROCERY
          </Text>
          <Text style={styles.dealText}>FREE DELIVERY</Text>
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
              fontSize: "16px",
              fontFamily: "sans-serif",
              letterSpacing: "-0.5px",
            }}
          >
            GENIE
          </Text>
          <Text
            style={{
              fontWeight: "400",
              color: "grey",
              fontSize: "13px",
              fontFamily: "sans-serif",
              marginTop: "5px",
            }}
          >
            PICK UP & DROP
          </Text>
          <Image
            source={require("../assets/bowl-1.jpg")}
            style={styles.cardImage2}
          />
        </Pressable>
      </View>

      <View style={styles.card2}>
        <Pressable>
          <Text
            style={{
              fontWeight: "700",
              color: "black",
              fontSize: "16px",
              fontFamily: "sans-serif",
              letterSpacing: "-0.5px",
            }}
          >
            MINIS
          </Text>
          <Text
            style={{
              fontWeight: "400",
              color: "grey",
              fontSize: "13px",
              fontFamily: "sans-serif",
              marginTop: "5px",
            }}
          >
            UNIQUE FINDS
          </Text>
          <Image
            source={require("../assets/bowl-1.jpg")}
            style={styles.cardImage2}
          />
        </Pressable>
      </View>

      <View style={styles.card2}>
        <Pressable>
          <Text
            style={{
              fontWeight: "700",
              color: "black",
              fontSize: "16px",
              fontFamily: "sans-serif",
              letterSpacing: "-0.5px",
            }}
          >
            INSANELYGOOD
          </Text>
          <Text
            style={{
              fontWeight: "400",
              color: "grey",
              fontSize: "13px",
              fontFamily: "sans-serif",
              marginTop: "5px",
            }}
          >
           QUALITY GROCERY
          </Text>
          <Image
            source={require("../assets/bowl-1.jpg")}
            style={styles.cardImage2}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Right;

const styles = StyleSheet.create({
  card1: {
    paddingLeft: "15px",
    paddingTop: "15px",
    backgroundColor: "white",
    height: "150px",
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
    width: 100,
    height: 100,
    position: "absolute",
    right: -5,
    top: 70,
    zIndex: 0,
  },
  card2: {
    paddingLeft: "15px",
    paddingTop: "15px",
    marginTop: "20px",
    backgroundColor: "white",
    height: "70px",
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
    width: 60,
    height: 60,
    position: "absolute",
    right: -20,
    zIndex: 0,
  },
  dealText: {
    color: "orange",
    fontFamily: "sans-serif",
    fontSize: "10px",
    fontWeight: "600",
    marginTop: "5px",
  },
});
