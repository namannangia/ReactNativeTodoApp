import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
const checkedImage = require("../assets/checked.png");
const uncheckedImage = require("../assets/unchecked.png");
import { useSelector, useDispatch } from "react-redux";
import {
  mark_as_complete,
  mark_as_incomplete,
} from "../redux/actions/countAction";

const TaskItem = ({ index }) => {
  const dispatch = useDispatch();
  const textArray = useSelector((store) => store.count.text.split("#"));
  const flagArray = useSelector((store) => store.count.flags.split("#"));

  function onPress() {
    console.log(textArray);
    console.log(flagArray);
    flagArray[index] === "1"
      ? dispatch(mark_as_incomplete(index))
      : dispatch(mark_as_complete(index));
  }
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageHolder}>
          {flagArray[index] === "1" ? (
            <Image style={styles.tinyLogo} source={checkedImage} />
          ) : (
            <Image style={styles.tinyLogo} source={uncheckedImage} />
          )}
        </View>
        <View style={styles.textHolder}>
          <Text style={styles.text}>{textArray[index]}</Text>
        </View>
        <View>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
  text: { fontSize: 19, fontWeight: 500 },
  imageHolder: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  tinyLogo: { height: 30, width: 30 },
});

export default TaskItem;
