import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import * as eva from "@eva-design/eva";
import { default as theme } from "../../theme.json";


const CustomNotes = ({ category, numberOfNotes, onPress }) => {
  return (
    <TouchableOpacity style={styles.wraper} onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{category}</Text>
        <Text style={styles.text}>{numberOfNotes}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wraper: {
    alignItems: "center",
    width: "70%",
    margin: "5%",
  },
  text: {
    fontSize: "20%",
  },
  container:{
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  }
});

export default CustomNotesCategory;