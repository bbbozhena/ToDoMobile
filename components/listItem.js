import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ListItem({item, deleteHandler}) {
  return (
    <TouchableOpacity onPress={() => deleteHandler(item.key)}>
        <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 15,
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "pink",
    borderWidth: 0.5,
    marginTop: 20,
    width: "60%",
    marginLeft:"20%"
  }
});
