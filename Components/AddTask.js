import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  Platform,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../redux/actions/countAction";
import Dialog from "react-native-dialog";
const AddTask = () => {
  const [visible, setVisible] = React.useState(false);
  const [prompt, setPrompt] = React.useState("");
  const dispatch = useDispatch();
  function onPress() {
    Platform.OS === "ios"
      ? Alert.prompt("Enter task here", "All the best!", (input) => {
          dispatch(addTask(input));
        })
      : setVisible(true);
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageHolder}>
          <Image
            style={styles.tinyLogo}
            source={require("../assets/union.png")}
          />
        </View>
        <View style={styles.textHolder}>
          <Text style={styles.text}>Add Task</Text>
        </View>
        <View>
          <Dialog.Container visible={visible}>
            <Dialog.Title>Enter your task</Dialog.Title>
            <Dialog.Input
              value={prompt}
              onChangeText={(e) => setPrompt(e)}
              placeholder="Learn a skill"
            />
            <Dialog.Button label="Cancel" onPress={() => setVisible(false)} />
            <Dialog.Button
              label="Confirm"
              onPress={() => {
                dispatch(addTask(prompt));
                setPrompt("");
                setVisible(false);
              }}
            />
          </Dialog.Container>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    display: "flex",
    backgroundColor: "#F9F9FB",
    borderRadius: 20,
    padding: 10,
    margin: 10,
    justifyContent: "center",
    alignContent: "center",
    minHeight: 70,
  },
  textHolder: { flex: 3, marginLeft: 10, justifyContent: "center" },
  text: { fontSize: 20, fontWeight: 500, color: "#ABB6C8" },
  imageHolder: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  tinyLogo: { left: 8, height: 25, width: 25 },
});

export default AddTask;
