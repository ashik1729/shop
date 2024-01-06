import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Platform,
  ScrollView,
} from "react-native";
import RegisterForm from "./RegisterForm";
import logo from "./../../assets/mylogo.png"; // Import your logo image
import { LinearGradient } from "expo-linear-gradient";
import GoogleAuth from "./../google/GoogleAuth";

const RegisterComponent = () => {
  const screenHeight = Dimensions.get("window").height;
  const viewHeight = (40 / 100) * screenHeight;
  const viewHeightWrapper = (60 / 100) * screenHeight;
  return (
    <View style={styles.container}>
      {/* <ScrollView style={{ flex: 1 }}> */}
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
      </LinearGradient>
      <View style={styles.loginBlock}>
        <RegisterForm />
        <GoogleAuth />
      </View>
      {/* </ScrollView> */}
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
    // flex: 1,
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
});

export default RegisterComponent;
