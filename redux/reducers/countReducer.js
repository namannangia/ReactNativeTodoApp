const initialState = {
  flags: "1#0#0#",
  text: "User Research & Analysis#Black & White Wireframe#Design On Figma#",
};

export default (state = initialState, action) => {
  var pay = Number(action.type.substring(15));
  console.log("Action: '" + action.type + "' for index: " + pay);
  switch (action.type.substring(0, 15)) {
    case "MARK___COMPLETE":
      var tempArr = state.flags;
      tempArr =
        tempArr.substring(0, pay * 2) + "1#" + tempArr.substring(pay * 2 + 2);
      console.log("Array is: " + tempArr.toString());
      return {
        text: state.text,
        flags: tempArr,
      };
    case "MARK_INCOMPLETE":
      var tempArr = state.flags;
      tempArr =
        tempArr.substring(0, pay * 2) + "0#" + tempArr.substring(pay * 2 + 2);
      console.log("Array is: " + tempArr.toString());
      return {
        text: state.text,
        flags: tempArr,
      };
    case "DELETE_ALL":
      return {
        text: "",
        flags: "",
      };
    case "ADD__NEW__TASK_":
      var pay = action.type.substring(15);
      var tempStr=state.text+pay+"#";
      var tempStr2=state.flags+"0#";
      return {
        text: tempStr,
        flags: tempStr2,
      };
    default:
      return state;
  }
};
