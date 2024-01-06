import React, { useState, useRef, useEffect } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import logo from "./../../assets/mylogo.png"; // Import your logo image
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const OtpComonent = () => {
  const navigation = useNavigation();

  // const otpRefs = useRef(otpInputs.map(() => React.createRef()));
  const screenHeight = Dimensions.get("window").height;
  const viewHeight = (40 / 100) * screenHeight;
  const viewHeightWrapper = (60 / 100) * screenHeight;
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const otpRefs = useRef(
    Array(6)
      .fill(null)
      .map(() => useRef())
  );

  const handleChange = (index, value) => {
    // Update the OTP array with the entered digit
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Move focus to the next input
    if (value !== "" && index < otp.length - 1) {
      otpRefs.current[index + 1].current.focus();
    }
  };

  const handleResend = () => {
    // Implement logic to resend OTP (e.g., API call)
    // Reset the OTP input fields
    setOtp(["", "", "", "", "", ""]);
    // Move focus to the first input
    otpRefs.current[0].current.focus();
  };

  const handleVerify = () => {
    if (otp.every((digit) => digit !== "")) {
      // Implement logic to verify the entered OTP
      const enteredOtp = otp.join("");
      console.log("Entered OTP:", enteredOtp);
      // Add your logic here to handle the verification process
      navigation.navigate("Home");
    } else {
      // Show an alert if any OTP field is empty
      Alert.alert("Validation Error", "Please fill in all OTP fields.");
    }
  };

  return (
    <View style={styles.container}>
      {/* <ScrollView style={{ flex: 1 }}> */}
      {/* <Text>asdsadas</Text> */}
      {/* Your content here */}
      <LinearGradient
        colors={[
          "rgba(72,198,248,1)",
          "rgba(169,249,245,1)",
          "rgba(89,223,170,1)",
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.loginBlockWelcomeWrapper, { height: viewHeightWrapper }]}
      >
        <LinearGradient
          colors={[
            "rgba(128,219,255,0.9864320728291317)",
            "rgba(21,118,251,1)",
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          locations={[0.07, 0.39]}
          style={styles.loginBlockWelcome}
        >
          <View style={styles.loginBlockWelcomeItems}>
            <Text style={styles.text}>Welcome</Text>
            <Image source={logo} style={styles.logo} />
          </View>
        </LinearGradient>

        <View style={styles.loginBlock}>
          <Text style={styles.title}>Enter OTP</Text>
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={otpRefs.current[index]}
                style={styles.input}
                keyboardType="numeric"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleChange(index, text)}
              />
            ))}
          </View>
          <TouchableOpacity style={styles.resendButton} onPress={handleResend}>
            <Text style={styles.resendButtonText}>Resend OTP</Text>
          </TouchableOpacity>
          <View style={styles.buttonBlock}>
            <TouchableOpacity
              style={styles.verifyButton}
              onPress={handleVerify}
            >
              <Text style={styles.verifyButtonText}>Verify</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    // justifyContent: "flex-end", // Align content to the bottom
    width: "100%", // Add margin if needed
    // backgroundColor: "red",
    bottom: 1,
    paddingBottom: 100,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
  },
  logo: {
    width: 150,
    height: 150,
  },
  loginBlockWelcomeWrapper: {
    // backgroundColor: "black",
    // borderTopLeftRadius: 0,
    // borderTopRightRadius: 0,
    // borderBottomLeftRadius: 50,
    // borderBottomRightRadius: 50,
    // padding: 50,
    textAlign: "center",
    position: "relative",
    flex: 1,
    // flexDirection: "row",
    // // justifyContent: "space-between", // Align content to the bottom
    // alignContent: "center",
    // alignItems: "center",
  },
  loginBlockWelcome: {
    // backgroundColor: "#2591fd",
    // height: 100,
    borderTopLeftRadius: 250,
    borderTopRightRadius: 250,
    borderBottomLeftRadius: 250,
    borderBottomRightRadius: 250,
    // borderRadius: 50,
    width: 500,
    height: 500,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end", // Align content to the bottom
    alignContent: "center",
    alignItems: "center",

    padding: 100,
    // textAlign: "center",
    position: "absolute",
    top: -100,
    left: -130,
  },
  loginBlock: {
    // width: 300,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    margin: "0 auto",
    padding: 30,
    backgroundColor: "#fff",
    borderRadius: 20,
    margin: 30,
    padding: 20, // Adjust the padding as needed
    backgroundColor: "rgba(255, 255, 255, 0.8)", // White with 50% transparency
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.8)", // White border with 80% transparency
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10, // Adjust the shadow radius as needed
    // justifyContent: "center",
    // alignItems: "center",
    // marginTop: 100,
  },

  title: {
    fontSize: 20,
    marginBottom: 20,
    color: "#fff",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // width: 200,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: 40,
    textAlign: "center",
    marginRight: 5,
  },
  resendButton: {
    marginTop: 10,
  },
  resendButtonText: {
    color: "green",
  },
  verifyButton: {
    backgroundColor: "#2591fd",
    padding: 10,
    alignItems: "center",
    borderRadius: 25,
    width: 150,
    marginBottom: 20,
    marginTop: 20,
    // marginRight: "auto",
    // marginRight: "auto",
    textAlign: "center",
  },
  verifyButtonText: {
    color: "white",
  },
  buttonBlock: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    // padding: 16,
  },
});

export default OtpComonent;
