// HomeScreen.js

import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, ScrollView, StyleSheet, Text, SafeAreaView } from "react-native";
import OtpComponent from "./../components/otp/OtpComponent";
import Footer from "./../components/Footer";
import { useNavigation } from "@react-navigation/native";

const OtpScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* //   <Text>Welcome to Home Screen!</Text> */}
      {/* // </View> */}
      {/* // <View style={{ flex: 1 }}> */}
      {/* <ThumbnailBlock /> */}
      {/* <Header /> */}
      <ScrollView>
        <OtpComponent />
      </ScrollView>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default OtpScreen;
