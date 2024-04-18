import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
export default function Home({ navigation }) {
  const [text, setText] = React.useState("");
  function handleSubmit() {
    console.log(text);
    navigation.navigate("Split", {
      amount: text,
    });
  }
  return (
    <KeyboardAvoidingView behavior={"padding"} style={styles.container}>
      <Text style={styles.logo}>
        Bill Splitter
        <Image
          style={styles.image}
          source={require("../assets/bill.png")}
        ></Image>
      </Text>
      <View style={styles.inputForm}>
        <TextInput
          onChangeText={(text) => {
            setText(text);
          }}
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter amount"
        />
        <Button style={styles.btn} title="Go!" onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "ivory",
  },
  logo: {
    fontSize: 24,
    marginBottom: 100,
  },
  inputForm: {
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  input: {
    width: "60%",
    padding: 10,
    borderColor: "blue",
    borderRadius: 5,
    borderWidth: 1,
  },
  btn: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "blue",
  },
  image: {
    width: 30,
    height: 30,
  },
});
