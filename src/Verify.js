import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  Pressable,
  TextInput,
} from "react-native";

const Verify = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (val, index) => {
    const newOtp = [...otp];
    newOtp[index] = val.substring(val.length - 1);
    setOtp(newOtp);

    if (val && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);

    if (otp[index - 1] === "") {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  const handleBack = (nativeEvent, index) => {
    if (
      nativeEvent.key === "Backspace" &&
      inputRefs.current[index - 1] &&
      !otp[index]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  const goToScreens = () => {
    console.log(otp.join(""));
    navigation.navigate("MainScreen")
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
        <Text style={styles.text}>Enter OTP</Text>
        <View style={styles.otpWrapper}>
          {otp.map((value, index) => {
            return (
              <TextInput
                key={index}
                ref={(tag) => (inputRefs.current[index] = tag)}
                value={value}
                onChangeText={(val) => handleChange(val, index)}
                onTouchStart={() => handleClick(index)}
                onKeyPress={(nativeEvent) => handleBack(nativeEvent, index)}
                style={styles.textInput}
              ></TextInput>
            );
          })}
        </View>

        <Pressable onPress={goToScreens} style={styles.button}>
          <Text style={styles.button_text}>CONTINUE</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Verify;

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
  text: {
    fontSize: "10px",
    color: "#636262",
    marginTop: "30px",
    fontFamily: "Verdana",
  },
  otpWrapper: {
    flexDirection: "row",
    marginBottom: "50px",
    justifyContent: "space-evenly",
  },
  textInput: {
    paddingVertical: "10px",
    outlineStyle: "none",
    width: "50px",
    borderBottomColor: "orange",
    borderBottomWidth: "2px",
    textAlign: "center",
    fontSize: "15px",
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
});
