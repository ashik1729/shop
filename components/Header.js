import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import logo from "./../assets/mylogo.png"; // Import your logo image
import Icon from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// const Drawer = createDrawerNavigator();

// import { createDrawerNavigator } from "@react-navigation/drawer";
// import HamburgerMenu from "./menu/HamburgerMenu";
// import Menu from "./Menu";
// import { Drawer } from "react-native-drawer-layout";

const Header = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    // Implement your search logic here
    console.log("Search pressed with text:", searchText);
  };

  const HomeScreen = () => (
    // Your main screen content goes here
    <View>
      <Text>Home Screen</Text>
    </View>
  );

  return (
    <View style={[styles.header, Platform.OS === "ios" && styles.headerIos]}>
      {/* <Image source={logo} style={styles.logo} /> */}
      {/* <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>
      </NavigationContainer> */}
      {/* <View style={styles.nav}>
     <Button title="Open Drawer" onPress={() => navigation.openDrawer()} /> 
      <Text style={styles.menuItem}>Shop</Text>
      <Text style={styles.menuItem}>Login</Text>
      <Text style={styles.menuItem}>Register</Text>
      <Text style={styles.menuItem}>Find Us</Text>
    <Menu />  </View> */}

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Icon
            name="search"
            size={20}
            color="#fff"
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    padding: 10,
    marginTop: 40,
    backgroundColor: "#2a55e5",
  },
  headerIos: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    padding: 10,
    marginTop: 0,
    backgroundColor: "#2a55e5",
  },
  logo: {
    width: 30,
    height: 30,
  },
  nav: {
    flexDirection: "row",
  },
  menuItem: {
    paddingLeft: 10,
    fontWeight: "500",
    color: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 30,
    marginRight: 30,
    position: "relative",
  },
  searchIcon: {
    marginRight: 5,
    position: "absolute",
    right: 0,
    top: -10,
    color: "red",
  },
  searchInput: {
    height: 35,
    // flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingLeft: 10,
    paddingRight: 30,
  },
});

export default Header;
