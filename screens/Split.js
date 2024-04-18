import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { Keyboard } from "react-native";
import Slider from "@react-native-community/slider";
import React from "react";
import { SelectList } from "react-native-dropdown-select-list";
export default function Split({ route }) {
  const { amount } = route.params;
  const total = Number(amount);
  const [selected, setSelected] = React.useState(1);
  const [value, setValue] = React.useState(30);

  function handleInput(val) {
    console.log(val);
    setValue(val);
  }
  function handleSlide(val) {
    setValue(Math.trunc(val));
  }
  const data = [
    { key: "1", value: "1" },
    { key: "2", value: "2" },
    { key: "3", value: "3" },
    { key: "4", value: "4" },
    { key: "5", value: "5" },
    { key: "6", value: "6" },
    { key: "7", value: "7" },
    { key: "8", value: "8" },
    { key: "9", value: "9" },
    { key: "10", value: "10" },
  ];

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <KeyboardAvoidingView style={styles.container} behavior={"padding"}>
        <Text style={styles.logo}>
          Bill Splitter
          <Image
            style={styles.image}
            source={require("../assets/bill.png")}
          ></Image>
        </Text>
        <View>
          <View style={styles.test}>
            <Text>Total amount :{amount}$</Text>
            <View style={styles.dropdown}>
              <Text>Select number of people </Text>
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={data}
                save="value"
                search={false}
                defaultOption={{ key: "1", value: "1" }}
                inputStyles={{ width: 100 }}
              />
            </View>
            <View style={styles.slider}>
              <Text>Adjust percentage of tip </Text>
              <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={0}
                maximumValue={100}
                onValueChange={handleSlide}
                value={value}
              />

              <Text style={{ fontSize: 16 }}>{value}</Text>
            </View>

            <View>
              <TextInput
                onChangeText={handleInput}
                style={styles.input}
                keyboardType="numeric"
                placeholder="Set tip manually"
                value={value.toString()}
              />
              <Text style={{ fontSize: 16, marginTop: 16 }}>
                Pay per person :
                {(Math.trunc(total + (total * value) / 100) / selected).toFixed(
                  1
                )}
              </Text>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "ivory",
  },
  test: {
    justifyContent: "center",
    alignItems: "center",
  },
  dropdown: {
    marginTop: 15,
  },
  slider: {
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginTop: 15,
    width: 150,
    padding: 10,
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: "center",
  },
  logo: {
    fontSize: 24,
    marginBottom: 30,
  },
  image: {
    width: 30,
    height: 30,
  },
});
