import auth from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Pressable,
} from "react-native";

const Login = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState();
  const [confirm, setConfirm] = useState(null);

  const sendOTP = async () => {
    console.log(phoneNumber);
    navigation.navigate("Verify");

    // try {
    //   const response = await auth().signInWithPhoneNumber(phoneNumber);
    //   setConfirm(response);
    //   console.log(response);

    // } catch (error) {
    //   console.log("Error sending OTP", error);
    // }
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
          <Text style={styles.heading}>Login</Text>
          <Text style={styles.text}>Enter your phone number to proceed</Text>
        </View>

        <View>
          <Text style={styles.text_phone}>PHONE NUMBER</Text>
          <View style={styles.numberview}>
            <Text>+91</Text>
            <TextInput
              textContentType="telephoneNumber"
              value={phoneNumber}
              onChangeText={(number) => setPhoneNumber(number)}
              style={styles.textinput}
              autoFocus={true}
            />
          </View>
        </View>

        <View style={styles.button_view}>
          <Pressable onPress={sendOTP} style={styles.button}>
            <Text style={styles.button_text}>CONTINUE</Text>
          </Pressable>
          <Text style={styles.text2}>
            By clicking, I accept the{" "}
            <Text style={styles.span}>Terms and Conditions</Text> &{" "}
            <Text style={styles.span}>Privacy Policy</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

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
  text_phone: {
    fontSize: "12px",
    color: "#636262",
    marginTop: "20px",
    fontWeight: "500",
  },
  textinput: {
    marginLeft: "5px",
    paddingVertical: "10px",
    outlineStyle: "none",
  },
  numberview: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "orange",
    borderBottomWidth: "2px",
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
});
