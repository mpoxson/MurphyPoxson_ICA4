import { StyleSheet, Text, View } from "react-native";

import React, { useState } from "react";

//any additional imports
import task from "./components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      {/* List all todo items */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>My ToDo Items</Text>

        {/* container/wrapper for all tasks to be rendered */}
        <View style={styles.items}>
          <Task text={"this is task 1"} />
          <Task text={"this is task 2"} />
          <Task text={"this is task 3"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
