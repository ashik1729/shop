import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    // Implement your login logic here
    console.log("Login pressed");
    console.log("Email:", email);
    console.log("Password:", password);
  };
  const handleLinkPress = () => {
    // Replace 'https://www.example.com' with the actual URL you want to open
    navigation.navigate("RegisterScreen");
  };
  return (
    <View>
      <Text style={styles.login}>Sign In</Text>
      <TouchableOpacity onPress={handleLinkPress}>
        <Text style={styles.new_user}>
          New User? <Text style={styles.create_account}>Sign Up </Text>
        </Text>
      </TouchableOpacity>

      <View style={styles.container}>
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
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <View style={styles.buttonBlock}>
          <TouchableOpacity
            style={[
              styles.loginbutton,
              Platform.OS === "ios" && styles.loginbuttonIos,
            ]}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Sign In</Text>
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
  login: {
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
  loginbutton: {
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
  loginbuttonIos: {
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

export default LoginForm;
