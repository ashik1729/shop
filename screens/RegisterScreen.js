// screens/RegisterScreen.js

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegisterComponent from "../components/register/RegisterComponent";
import Footer from "./../components/Footer";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigation = useNavigation();
  const handleRegister = () => {
    // Implement your registration logic here
    console.log("Register pressed");
    console.log("Email:", email);
    console.log("Name:", name);
    console.log("Phone Number:", phoneNumber);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView> */}
      <RegisterComponent />
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
export default RegisterScreen;
