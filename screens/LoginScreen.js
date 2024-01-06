// screens/LoginScreen.js

import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  View,
  Text,
  Button,
  ScrollView,
  TextInput,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import LoginComponent from "../components/login/LoginComponent";
import Footer from "./../components/Footer";

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView> */}
      <LoginComponent />
      {/* </ScrollView> */}
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // Change this to the color you want for the small gap
  },
});
export default LoginScreen;
