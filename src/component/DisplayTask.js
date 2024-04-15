import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import CheckBox from "expo-checkbox";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const DisplayTask = (props) => {
  const [showDeleteAll, setShowDeleteAll] = useState(false);
  const [showNumberTask, setShowNumberTask] = useState(false);
  const [checkboxActiveList, setCheckboxActiveList] = useState([]);

  /* we need 2 arrows because the default function passes to onPress doesnt take any arguments 
  usually only onPress={handleDeleteTask} so if onPress={handleDeleteTask(index)} then handleDeleteTask 
  would need to be written like below */
  // THIS ONLY WORK WHEN FUNCTIONS AND CALL IS IN THE SAME FILE DOESNT WORK WITH PASSING THE FUNCTION BACK AND FORTH WITH PROPS
  const handleDeleteTask = (indexDelete) => () => {
    /* passing index of the item to delete to the deleteTaskComplete of props, which will continue 
    to pass this value backwards to deleteTaskComplete in Home and run the funciton in home */
    props.deleteTaskComplete(indexDelete);
  };

  const handleDeleteAll = () => {
    props.deleteAll();
  };

  useEffect(() => {
    if (props.listTask.length >= 2) {
      setShowDeleteAll(true);
    } else {
      setShowDeleteAll(false);
    }
  }, [props.listTask]);

  useEffect(() => {
    setShowNumberTask(showDeleteAll);
  }, [showDeleteAll]);

  const handleCheckBox = (indexCheckBox) => () => {
    props.updateCheckBox(indexCheckBox);
  };

  return (
    <View style={styles.container}>
      <View style={styles.deleteAllContainer}>
        {/* if showNumberTask is true then the statements following will execute */}
        {showNumberTask && (
          <Text style={{}}>You have {props.listTask.length} task</Text>
        )}
        {/* if showDeleteALl is true then the statements following will execute */}
        {showDeleteAll && (
          <TouchableOpacity onPress={handleDeleteAll} style={styles.deleteAll}>
            <Text style={{ color: "white" }}>Delete All</Text>
          </TouchableOpacity>
        )}
      </View>
      {/* this render every single item from the listTask passed from Home to listTask in props of DisplayTask  */}
      {props.listTask.map((item, index) => {
        const textStyle = {
          textDecorationLine: !item.active ? "line-through" : "",
          textDecorationStyle: "solid",
        };
        return (
          <View key={index} style={styles.tagContainer}>
            <View>
              <CheckBox
                value={!item.active}
                onValueChange={handleCheckBox(index)}
              />
            </View>
            <View>
              <Text style={textStyle}>
                {item.title}-{item.description}
              </Text>
            </View>
            {/* passing index to the delete button of each item */}
            <TouchableOpacity onPress={handleDeleteTask(index)}>
              <View style={styles.deleteButton}>
                <Text style={styles.text}>Delete</Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default DisplayTask;

const styles = StyleSheet.create({
  text: { fontSize: 12, color: "white" },
  container: { padding: 10 },
  tagContainer: {
    width: 300,
    borderBottomWidth: 1,
    borderColor: "gray",
    paddingVertical: 5,
    flexDirection: "row",
    // align vertically
    justifyContent: "space-between",
    // align horizontally
    alignItems: "center",
  },
  deleteButton: {
    width: 50,
    height: 20,
    backgroundColor: "red",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteAll: {
    width: 100,
    height: 40,
    backgroundColor: "green",
    marginTop: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteAllContainer: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 10,
  },
});
