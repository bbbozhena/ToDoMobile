import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import Header from "./components/header";
import ListItem from "./components/listItem";

export default function App() {
  const [listOfItems, stListOfItems] = useState([
    {
      text: "Milk",
      index: 1,
    },
    {
      text: "Meat",
      index: 2,
    },
    {
      text: "Sugar",
      index: 3,
    },
    {
      text: "Chocolate",
      index: 4,
    },
  ]);

  return (
    <View>
      <Header />
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => <ListItem item={item}></ListItem>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
