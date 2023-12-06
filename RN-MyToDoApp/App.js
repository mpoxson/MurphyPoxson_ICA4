import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import React, { useState } from "react";

//any additional imports
import task from "./components/Task";

export default function App() {
  //input area
  const [task, setTask] = useState();

  //to store all tasks
  const [taskItems, setTaskItems] = useState([]);

  //event listener logic
  const handleAddTask = () => {
    keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  //event listener logic for deleting task
  const completeTask = () => {
    let copyItems = [...taskItems];
    //remove the specific task as selected by user
    copyItems.splice(index, 1);
    //update the original array by rewriting it with the copied array
    setTaskItems(copyItems);
  };

  return (
    <View style={styles.container}>
      {/* List all todo items */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>My ToDo Items</Text>

        {/* container/wrapper for all tasks to be rendered */}
        <View style={styles.items}>
          {/* <Task text={"this is task 1"} /> */}
        </View>
      </View>
      {/* User input for todo tasks */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Add your to do item here"}
          value="task"
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.andWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
