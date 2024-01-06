import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ThumbnailBlock = () => {
  return (
    <View style={styles.thumbnailBlock}>
      {/* Three thumbnail components go here */}
    </View>
  );
};

const styles = StyleSheet.create({
  thumbnailBlock: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
  },
});

export default ThumbnailBlock;
