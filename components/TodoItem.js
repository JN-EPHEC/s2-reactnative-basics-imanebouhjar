import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TodoItem({ text }) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e6e6e6",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
});
