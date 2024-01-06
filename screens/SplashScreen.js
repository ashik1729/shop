// SplashScreen.js

import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import Swiper from "react-native-swiper";

const SplashScreen = ({ navigation }) => {
  const [swiperIndex, setSwiperIndex] = useState(0);

  const handleSwiperFinish = () => {
    // If the last slide, show the "Get Started" button
    if (swiperIndex === 2) {
      return (
        <TouchableOpacity style={styles.button} onPress={handleGetStartedPress}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      );
    }
  };

  const handleSkipPress = () => {
    // Navigate to the home screen
    navigation.navigate("Home");
  };

  const handleGetStartedPress = () => {
    // Navigate to the home screen
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        loop={false}
        onIndexChanged={(index) => setSwiperIndex(index)}
      >
        <View style={styles.slide}>
          <Image
            source={require("./../assets/splash1.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require("./../assets/splash2.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require("./../assets/splash3.png")}
            style={styles.image}
          />
        </View>
      </Swiper>
      <View style={styles.bottomContainer}>
        {swiperIndex < 2 && (
          <TouchableOpacity style={styles.button} onPress={handleSkipPress}>
            <Text style={styles.buttonText}>Skip</Text>
          </TouchableOpacity>
        )}
        {handleSwiperFinish()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.3)",

    borderRadius: 8,
    marginLeft: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default SplashScreen;
