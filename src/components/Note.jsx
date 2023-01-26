import { StyleSheet, View, TouchableOpacity } from "react-native";
import React, {useState} from "react";
import { Card, Text, Radio } from "@ui-kitten/components";
import uuid from "react-native-uuid";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Note = ({ text,  index }) => {
  const [isVisible, setIsVisible] = useState(true);
  const removeElement = () => {
    setIsVisible((prev) => !prev);
  };
  const date = new Date().toLocaleString();
  return (
    <View>
      { isVisible &&
        <View index={index}>
          <Card style={styles.note} key={uuid.v4()}>
            <View style={styles.topContainer}>
              <TouchableOpacity onPress={removeElement}>
                <MaterialCommunityIcons name="delete" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.date}>{date}</Text>
            </View>
            <Text style={styles.text}>{text}</Text>
          </Card>
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  note: {
    margin: "3%",
    backgroundColor: "#e6f9ff",
    borderRadius: 10,
    padding: "1%",
    width: "80%",
    flexDirection: "column",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    color: "black",
  },
  date: {
    fontSize: "15%",
    top: 0,
    left: 0,
    textAlign: "center",
    margin: "3%",
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "3%",
  },
});

export default Note;
