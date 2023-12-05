import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <Text>This is a {props.text}</Text>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({});
