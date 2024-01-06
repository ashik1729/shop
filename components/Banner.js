import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import Swiper from "react-native-swiper";

const Banner = () => {
  const bannerImages = [
    "https://wakra-lab.com/react-native/banner1.jpg",
    "https://wakra-lab.com/react-native/banner2.jpg",
    "https://wakra-lab.com/react-native/banner3.jpg",
  ];

  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} autoplay>
        {bannerImages.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image style={styles.image} source={{ uri: image }} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  banner: {
    padding: 20,
    backgroundColor: "lightblue",
  },
  container: {
    height: 200,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width,
    flex: 1,
    resizeMode: "cover",
  },
});
export default Banner;
