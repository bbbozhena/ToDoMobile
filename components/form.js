import { StyleSheet, TextInput, Text, Button, View } from "react-native";

export default function Form() {
   

//   const onChange = (text) => {

//   };

  return (
    <View>
      <TextInput style={styles.input} onChangeText={onChange} placeholder="Write tasks.."></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({});
