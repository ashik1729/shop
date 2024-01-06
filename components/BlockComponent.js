// BlockComponent.js
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const BlockComponent = ({
  imageSource,
  title,
  price,
  discount,
  delivery,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: imageSource }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.pricing}>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.discount}>{discount}</Text>
        </View>
        <Text style={styles.delivery}>{delivery}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fcf5f5",
    margin: 5,
    borderRadius: 8,
    alignItems: "center",
    padding: 10,
    paddingBottom: 20,
    borderWidth: 1, // Set the width of the border
    borderColor: "#e0e0e0", // Set the color of the border
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 40,
    marginBottom: 8,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    // fontWeight: "bold",
    marginBottom: 4,
    minHeight: 40,
    textAlign: "center",
  },

  pricing: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  price: {
    fontSize: 12,
    marginBottom: 8,
    color: "#ccc",
    textDecorationLine: "line-through",
  },
  delivery: {
    fontSize: 13,
    fontWeight: "bold",
  },
  discount: {
    fontSize: 12,
    marginBottom: 8,
    marginRight: 5,
    marginLeft: 5,
    fontWeight: "400",
  },
  buttonContainer: {
    backgroundColor: "blue",
    padding: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default BlockComponent;
