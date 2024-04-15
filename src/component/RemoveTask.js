import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

const RemoveTask = (props) => {
  const handleDeleteAll = () => {
    props.deleteAllComplete();
  };

  return (
    <View>
      <TouchableOpacity onPress={handleDeleteAll}>
        <View style={styles.deleteAll}>
          <Text style={{ color: "white" }}>Delete All</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RemoveTask;

const styles = StyleSheet.create({
  deleteAll: {
    width: 100,
    height: 40,
    backgroundColor: "green",
    marginTop: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
