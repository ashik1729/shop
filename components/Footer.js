import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const navigation = useNavigation();

  const handlePress = (itemName, handleTo) => {
    setActiveItem(itemName);
    navigation.navigate(handleTo);
    console.log(handleTo);
    // Add logic to navigate or perform actions based on the selected item
  };
  const renderItem = (itemName, iconSource, activeIcon, label, handleTo) => (
    <TouchableOpacity
      style={styles.footerItem}
      onPress={() => handlePress(itemName, handleTo)}
    >
      <Image
        source={activeItem === itemName ? activeIcon : iconSource}
        style={styles.icon}
      />
      <Text
        style={[styles.label, activeItem === itemName && styles.activeLabel]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.footer}>
      {renderItem(
        "Home",
        require("./../assets/home-icon.png"),
        require("./../assets/home-icon-active.png"),
        "Home",
        "Home"
      )}
      {renderItem(
        "Categories",
        require("./../assets/categories-icon.png"),
        require("./../assets/categories-icon-active.png"),
        "Categories",
        "Categories"
      )}
      {renderItem(
        "Notification",
        require("./../assets/notification-icon.png"),
        require("./../assets/notification-icon-active.png"),
        "Notification",
        "Notification"
      )}
      {renderItem(
        "Account",
        require("./../assets/account-icon.png"),
        require("./../assets/account-icon-active.png"),
        "Account",
        "Login"
      )}
      {renderItem(
        "Cart",
        require("./../assets/cart-icon.png"),
        require("./../assets/cart-icon-active.png"),
        "Cart",
        "Cart"
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  footerItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  activeItem: {
    backgroundColor: "#007bff", // Set the background color for active items
  },
  icon: {
    width: 16,
    height: 16,
    marginBottom: 4,
  },
  label: {
    fontSize: 10,
    color: "#908f8f", // Set the text color for inactive items
  },
  activeLabel: {
    color: "#733dff", // Set the text color for active items
  },
});

export default Footer;
