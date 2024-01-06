import React, { useState } from "react";

import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const RegisterForm = () => {
  // const [name1, setName1] = useState("");
  // const [name2, setName2] = useState("");
  // const [name3, setName3] = useState("");
  // const [name4, setName4] = useState("");
  // const [name5, setName5] = useState("");
  // const [name6, setName6] = useState("");
  // const [name7, setName7] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigation = useNavigation();

  const validateEmail = () => {
    // Regular expression for validating an Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateName = () => {
    // Name should not be empty
    return name.trim() !== "";
  };

  const validatePassword = () => {
    // Password should be at least 6 characters long
    return password.length >= 6;
  };

  const validatePhoneNumber = () => {
    // Regular expression for validating a Phone Number
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleRegistration = () => {
    if (
      validateEmail() &&
      validateName() &&
      validatePassword() &&
      validatePhoneNumber()
    ) {
      // All fields are valid, you can proceed with registration logic
      // For demonstration purposes, just show an alert
      Alert.alert(
        "Registration Successful",
        "You can now proceed with registration!"
      );
      navigation.navigate("OtpScreen");
    } else {
      navigation.navigate("OtpScreen");

      // Validation failed, show an error message
      Alert.alert(
        "Validation Error",
        "Please check your input fields and try again."
      );
    }
  };
  const handleLinkLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <View>
      <Text style={styles.register}>Sign Up</Text>
      <TouchableOpacity onPress={handleLinkLogin}>
        <Text style={styles.new_user}>
          Existing User? <Text style={styles.create_account}>Sign In</Text>
        </Text>
      </TouchableOpacity>
      <View style={styles.container}>
        {/*  <TextInput
          style={styles.input}
          placeholder="Name"
          keyboardType="default"
          autoCapitalize="characters"
          value={name1}
          onChangeText={(text) => setName1(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Name"
          keyboardType="default"
          autoCapitalize="characters"
          value={name2}
          onChangeText={(text) => setName2(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Name"
          keyboardType="default"
          autoCapitalize="characters"
          value={name3}
          onChangeText={(text) => setName3(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Name"
          keyboardType="default"
          autoCapitalize="characters"
          value={name4}
          onChangeText={(text) => setName4(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Name"
          keyboardType="default"
          autoCapitalize="characters"
          value={name5}
          onChangeText={(text) => setName5(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Name"
          keyboardType="default"
          autoCapitalize="characters"
          value={name6}
          onChangeText={(text) => setName6(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Name"
          keyboardType="default"
          autoCapitalize="characters"
          value={name7}
          onChangeText={(text) => setName7(text)}
        /> */}
        <TextInput
          style={styles.input}
          placeholder="Name"
          keyboardType="default"
          autoCapitalize="characters"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          keyboardType="numeric"
          autoCapitalize="none"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <View style={styles.buttonBlock}>
          <TouchableOpacity
            style={[
              styles.registerbutton,
              Platform.OS === "ios" && styles.registerbuttonIos,
            ]}
            onPress={handleRegistration}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",

    // padding: 16,
  },
  buttonBlock: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // padding: 16,
  },
  register: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 10,
  },
  new_user: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 10,
  },
  create_account: {
    fontSize: 16,
    color: "#59dfaa",
    marginBottom: 10,
    fontWeight: "bold",
  },
  input: {
    height: 45,
    paddingLeft: 30,
    paddingRight: 30,
    borderColor: "#fff",
    borderRadius: 25,
    borderWidth: 1,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  registerbutton: {
    backgroundColor: "#2591fd",
    padding: 10,
    alignItems: "center",
    borderRadius: 25,
    width: 150,
    marginBottom: 30,
    marginTop: 0,
    marginRight: "auto",
    marginRight: 0,
    textAlign: "center",
  },
  registerbuttonIos: {
    padding: 15,
  },
  // button: {
  //   backgroundColor: "blue",
  //   padding: 10,
  //   alignItems: "center",
  // },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default RegisterForm;
