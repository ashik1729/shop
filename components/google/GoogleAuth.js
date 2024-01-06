import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import gicon from "./../../assets/gicon.png"; // Import your logo image

const GoogleAuth = () => {
  const handleGoogleLogin = () => {
    // Implement Google login logic here
    console.log("Google login pressed");
  };
  return (
    <View>
      <TouchableOpacity
        style={[styles.google, Platform.OS === "ios" && styles.googleIos]}
        onPress={handleGoogleLogin}
      >
        <Image source={gicon} style={styles.gicon} />
        <Text style={styles.googleText}>Sign In with Google</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  gicon: {
    width: 20,
    height: 20,
  },
  googleText: {
    color: "#ccc",
    fontWeight: "bold",
    marginLeft: 10,
  },
  google: {
    borderColor: "#ccc",
    borderWidth: 1,
    marginTop: 30,
    backgroundColor: "#fff",
    padding: 10,
    alignItems: "center",
    borderRadius: 25,
    marginBottom: 10,
    marginTop: 0,
    marginRight: "auto",
    marginRight: 0,
    textAlign: "center",
    marginTop: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  googleIos: {
    padding: 15,
  },
});

export default GoogleAuth;
