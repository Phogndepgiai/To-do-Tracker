import { StyleSheet, Text, View, VirtualizedList } from "react-native";
import React from "react";
import { useState } from "react";
import AddTask from "../component/AddTask";
import DisplayTask from "../component/DisplayTask";
import RemoveTask from "../component/RemoveTask";

const Home = () => {
  // this stores all the tasks that will be called back and forth from different components in the react native app
  const [listTask, setListTask] = useState([
    { title: "Title", description: "Description", active: true },
  ]);

  // this will add a task to the useState listTask
  const addTaskComplete = (task) => {
    let listTaskData = [...listTask];
    listTaskData.push(task);
    setListTask(listTaskData);
  };

  // this will delete the task from listTask using an index of the task in listTask
  const deleteTaskComplete = (indexDelete) => {
    let listTaskData = [...listTask];
    listTaskData.splice(indexDelete, 1);
    setListTask(listTaskData);
  };

  // this deletes all the items(object) in listTask
  const deleteAllComplete = () => {
    let listTaskData = [];
    setListTask(listTaskData);
  };

  const updateCheckBox = (indexCheckBox) => {
    let listTaskData = [...listTask];
    listTaskData[indexCheckBox].active = listTaskData[indexCheckBox].active
      ? false
      : true;
    setListTask(listTaskData);
  };

  return (
    <View style={styles.container}>
      {/* a view exclusively for addtask, which is the top component */}
      <View style={styles.textInput}>
        {/* passing function addTaskComplete of Home to props of AddTask as addTaskcomplete */}
        <AddTask addTaskComplete={addTaskComplete} />
      </View>
      {/* a view exclusively to display tasks */}
      <View style={styles.display}>
        {/* passing a list and a function to the props of DisplayTask */}
        <DisplayTask
          deleteAll={deleteAllComplete}
          listTask={listTask}
          deleteTaskComplete={deleteTaskComplete}
          updateCheckBox={updateCheckBox}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  // the container has flex of 1, which it will cover the entire page/screen
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  // the first part which is getting the task will have the ratio of 3:11 to the entire page
  textInput: {
    flex: 3,
    width: "100%",
  },
  // the deleteAll button part will have the ratio of 2:11 to the entire page
  deleteAll: {
    flex: 2,
    width: "100%",
  },
  // the second part which is displaying the page will have a ratio of 7:11 to the entire page
  display: {
    flex: 7,
    width: "100%",
  },
});
