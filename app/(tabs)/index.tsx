import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TodoItem from "../../components/TodoItem";

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Todo List</Text>

      <View style={styles.list}>
        <TodoItem text="Learn React Native" />
        <TodoItem text="Build a static UI" />
        <TodoItem text="Review components & props" />
      </View>
    </SafeAreaView>
  );
}
//je sais pas quoi modifier du coup je rajoute un commentaire incroyable 
export default HomeScreen; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  list: {
    marginTop: 8,
  },
});
