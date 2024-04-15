import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  const accountLogin = () => {
    navigation.navigate("Login");
  };

  return (
       <SafeAreaView>
          <View>
            <Image
              source={require("../assets/home-banner.png")}
              style={styles.image}
            />
          </View>

          <View style={styles.container}>
            <View style={styles.account_view}>
              <Text style={styles.heading}>ACCOUNT</Text>
              <Text style={styles.text}>
                Login/Create Account to manage orders
              </Text>
            </View>

            <View style={styles.button_view}>
              <Pressable onPress={accountLogin} style={styles.button}>
                <Text style={styles.button_text}>LOGIN</Text>
              </Pressable>
              <Text style={styles.text2}>
                By clicking, I accept the{" "}
                <Text style={styles.span}>Terms and Conditions</Text> &{" "}
                <Text style={styles.span}>Privacy Policy</Text>
              </Text>
            </View>

            <View style={styles.hr} />

            <View>
              <Pressable>
                <View style={styles.options}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <MaterialCommunityIcons
                      name="file-percent-outline"
                      size={24}
                      color="#2e2e2e"
                    />
                    <Text
                      style={{
                        marginLeft: "10px",
                        fontFamily: "Verdana",
                        color: "#2e2e2e",
                      }}
                    >
                      Offers
                    </Text>
                  </View>
                  <MaterialIcons
                    name="arrow-forward-ios"
                    size={20}
                    color="grey"
                  />
                </View>
              </Pressable>
            </View>

            <View style={styles.dotted_hr} />

            <View>
              <Pressable>
                <View style={styles.options}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Octicons name="mail" size={20} color="#2e2e2e" />
                    <Text
                      style={{
                        marginLeft: "12px",
                        fontFamily: "Verdana",
                        color: "#2e2e2e",
                      }}
                    >
                      Send Feedback
                    </Text>
                  </View>
                  <MaterialIcons
                    name="arrow-forward-ios"
                    size={20}
                    color="grey"
                  />
                </View>
              </Pressable>
            </View>
          </View>
      </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    objectFit: "contain",
    maxHeight: "250px",
  },
  container: {
    marginLeft: "15px",
    marginRight: "15px",
  },
  account_view: {
    marginTop: "25px",
  },
  button_view: {
    marginTop: "15px",
  },
  heading: {
    fontSize: "15px",
    fontFamily: "Verdana",
    fontWeight: "600",
    color: "#1a1919",
  },
  text: {
    fontSize: "12px",
    color: "#636262",
    marginVertical: "5px",
    fontFamily: "Verdana",
  },
  text2: {
    fontSize: "10px",
    color: "#636262",
    marginVertical: "10px",
    fontFamily: "Verdana",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#fc801a",
  },
  button_text: {
    fontWeight: "600",
    color: "white",
    fontFamily: "Verdana",
  },
  span: {
    color: "#1a1919",
    fontWeight: "700",
  },
  hr: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: "25px",
  },
  dotted_hr: {
    borderStyle: "dotted",
    borderBottomColor: "grey",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    paddingVertical: "20px",
  },
});
