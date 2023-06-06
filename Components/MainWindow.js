import React, { useState } from "react";
import { Avatar } from "react-native-elements";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  ScrollView,
  Button,
  Image,
  Touchable,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";
import { useSelector, useDispatch } from "react-redux";
import {
  mark_as_complete,
  mark_as_incomplete,
  addTask,
  delete_all,
} from "../redux/actions/countAction";

export default function MainWindow() {
  const dispatch = useDispatch();
  var content = [
    { checked: true, text: "User Research & Analysis" },
    { checked: true, text: "Black & White Wireframe" },
    { checked: false, text: "Design On Figma" },
  ];
  const [data, setData] = useState(content);

  const textArray = useSelector((store) => store.count.text.split("#"));
  const flagArray = useSelector((store) => store.count.flags);

  //Avatar Icons
  const iconsArr = [
    require("../assets/av1.png"),
    require("../assets/av2.png"),
    require("../assets/av3.png"),
    require("../assets/av4.png"),
  ];

  //Clicking on Garbage icon
  const garbageClick = () => {
    Alert.alert("All tasks deleted!");
    console.log(flagArray.toString());
    dispatch(delete_all());
    console.log(flagArray.toString());
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewTaskDetails}>
        <Text style={styles.taskDetails}>Task Details</Text>
      </View>
      <View style={styles.viewTaskTitle}>
        <Text style={styles.taskTitle}>Task Title</Text>
        <Text style={styles.taskHeading}>NFT Web App Prototype</Text>
      </View>
      <View style={styles.viewDescriptionTitle}>
        <Text style={styles.desctiptionTitle}>Descriptions</Text>
        <Text ellipsizeMode="tail" numberOfLines={4} style={styles.desctiption}>
          Last year was a fantastic year for NFTs, with the market reaching a
          $40 billion valuation for the first time. In addition, more than $10
          billion worth of NFTs are now sold every week - with NFT..
        </Text>
      </View>
      <View style={styles.viewIconsArray}>
        {iconsArr.map((data, key) => {
          return (
            <Avatar
              key={key}
              size="small"
              rounded
              source={data}
              containerStyle={{
                position: "absolute",
                zIndex: 4 - key,
                transform: [{ translateX: key * 20 }],
              }}
            />
          );
        })}
      </View>
      <View style={styles.taskListHead}>
        <Text style={styles.taskListText}>Task List </Text>
        <TouchableWithoutFeedback onPress={garbageClick}>
          <View>
            <Image
              style={{ height: 30, width: 22, right: 20 }}
              source={require("../assets/garbage.png")}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.scrollViewBox}>
        <ScrollView>
          {flagArray.split("#").map((value, key) => {
            return flagArray.charAt(0) === "#" ||
              key === flagArray.split("#").length - 1 ? (
              true
            ) : (
              <TaskItem key={key} index={key} />
            );
          })}
          {/* <TaskItem key={0} index={0}/> */}
          <AddTask />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "ios" ? 0 : "10%",
    marginLeft: 17,
    marginRight: 17,
    height: "100%",
    display: "flex",
  },
  viewTaskDetails: {
    flex: 1,
    display: "flex",
    maxHeight: "8%",
  },
  taskDetails: {
    flex: 1,
    fontWeight: 500,
    fontSize: 21,
    textAlign: "center",
    marginRight: 17,
  },
  viewTaskTitle: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  taskTitle: { flex: 1, display: "flex", color: "#5D6B98", fontSize: 19 },
  taskHeading: {
    flex: 1,
    fontSize: 25,
    fontWeight: 600,
  },
  viewDescriptionTitle: {
    flex: 1,
    display: "flex",
    // backgroundColor:'green'
  },
  desctiptionTitle: {
    flex: 1,
    fontWeight: 500,
    fontSize: 19,
    color: "#5D6B98",
  },
  desctiption: {
    flex: 3,
    fontWeight: 400,
    fontSize: 19,
  },
  viewIconsArray: {
    flex: 2,
    alignContent: "center",
    flexDirection: "row",
    marginTop: 14,
    maxHeight: "8%",
  },
  tinyLogo: { height: 40, width: 40 },

  taskListHead: {
    flex: 1,
    maxHeight: "5%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  taskListText: {
    flex: 1,
    fontWeight: 500,
    fontSize: 19,
    color: "#5D6B98",
  },
  scrollViewBox: { flex: 3 },
});
