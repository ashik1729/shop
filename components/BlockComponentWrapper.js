// BlockComponentWrapper.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import axios from "axios";

import BlockComponent from "./BlockComponent";

const BlockComponentWrapper = () => {
  const handleViewPress = () => {
    console.log("View Pressed!");
  };
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  console.log(data);
  const renderRowItem = ({ item }) => (
    // <View style={styles.item}>
    //   <Text style={styles.title}>{item.title}</Text>
    // </View>
    <BlockComponent
      imageSource={item.thumbnail}
      title={item.title}
      price={"QAR" + item.price}
      discount={
        "QAR" + (item.price - (item.price * item.discountPercentage) / 100)
      }
      delivery={item.brand}
      onPress={handleViewPress}
    />
  );

  return (
    // <View style={styles.container}>
    //   {isLoading ? (
    //     <ActivityIndicator size="large" color="#0000ff" />
    //   ) : (
    //     <FlatList
    //       data={data}
    //       keyExtractor={({ id }) => id.toString()}
    //       renderItem={({ item }) => (
    //         <View style={styles.item}>
    //           <Text style={styles.title}>{item.title}</Text>
    //           <Text>{item.body}</Text>
    //         </View>
    //       )}
    //     />
    //   )}
    // </View>
    //     <View style={styles.item}>
    //     <Text style={styles.title}>{item.title}</Text>
    //     <Text>{item.body}</Text>
    //   </View>
    <View style={styles.pageContainer}>
      <View style={styles.rowContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={data.products}
            keyExtractor={({ id }) => id.toString()}
            renderItem={renderRowItem}
            numColumns={2}
            // renderItem={({ item }) => (
            //   <BlockComponent
            //     imageSource={item.thumbnail}
            //     title={item.title}
            //     price={"QAR" + item.price}
            //     discount={
            //       "QAR" +
            //       (item.price - (item.price * item.discountPercentage) / 100)
            //     }
            //     delivery={item.brand}
            //     onPress={handleViewPress}
            //   />
            // )}
          />
        )}
        {/* <BlockComponent
          imageSource={
            "https://rukminim2.flixcart.com/image/612/612/l4x2rgw0/stuffed-toy/f/y/3/big-size-plush-husky-dog-stuffed-animal-soft-toy-gifts-for-kids-original-imagfppmqbzhrmjb.jpeg?q=70"
          }
          title="Block 1"
          price="QAR 200"
          discount="QAR 175"
          delivery="Free Delivery"
          onPress={handleViewPress}
        />
        <BlockComponent
          imageSource={
            "https://rukminim2.flixcart.com/image/612/612/xif0q/usb-gadget/v/9/j/usb-to-4-usb-a-ports-bestor-original-imaghz6ufc255zwk.jpeg?q=70"
          }
          title="Block 2"
          price="QAR 200"
          discount="QAR 175"
          delivery="Free Delivery"
          onPress={handleViewPress}
        />
        <BlockComponent
          imageSource={
            "https://rukminim2.flixcart.com/image/612/612/kmthz0w0/data-cable/micro-usb-cable/1/a/e/usb-3-0-a-to-micro-b-superspeed-cable-for-external-hard-drives-original-imagfmz4wd9ywrhh.jpeg?q=70"
          }
          title="Block 3"
          price="QAR 200"
          discount="QAR 175"
          delivery="Free Delivery"
          onPress={handleViewPress}
        /> */}
      </View>
      {/* Add another row of Items if needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    padding: 2,
    backgroundColor: "#fff",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
});

export default BlockComponentWrapper;
