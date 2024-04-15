import {
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { useState } from "react";

const AddTask = (props) => {
  // intial 2 useState to store the title and description
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const handleAddTask = () => {
    // if you want to set const task = {title: title, description: description}. You can write like below
    const task = { title, description, active: true };
    // passing the task to addTaskComplete of props which will pass back and be used by the addTaskComplete in Home
    props.addTaskComplete(task);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter title"
        style={styles.titleInput}
        // using useState
        onChangeText={(title) => setTitle(title)}
      />
      <TextInput
        placeholder="Enter description"
        style={styles.descriptionInput}
        // using useState
        onChangeText={(description) => setDescription(description)}
      />
      <TouchableWithoutFeedback onPress={handleAddTask}>
        <View style={styles.addTaskButton}>
          <Text style={{ color: "white" }}>Add Task</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  container: { padding: 10, paddingTop: 40 },
  titleInput: {
    width: 300,
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  descriptionInput: {
    width: 300,
    height: 40,
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  addTaskButton: {
    width: 100,
    height: 40,
    backgroundColor: "green",
    marginTop: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
