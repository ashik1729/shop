// HamburgerMenu.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HamburgerMenu = () => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View>
      <TouchableOpacity onPress={openDrawer}>
        <Text>Hamburger Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HamburgerMenu;
