import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import Header from "./components/header";
import ListItem from "./components/listItem";
import Form from "./components/form";

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    {
      text: "Milk",
      key: 1,
    },
    {
      text: "Meat",
      key: 2,
    },
    {
      text: "Sugar",
      key: 3,
    },
    {
      text: "Chocolate",
      key: 4,
    },
  ]);


  const addHandler = (text) => {
    setListOfItems((list) => {
      return [{ text: text, key: Math.random().toString(36).substring(7) }, ...list];
    });
  };

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter(listOfItems => listOfItems.key != key)
    })
  }


  return (
    <View>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => <ListItem item={item} deleteHandler={deleteHandler}></ListItem>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
