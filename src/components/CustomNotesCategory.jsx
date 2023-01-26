import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, {useState} from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const CustomNotesCategory = ({index, category, numberOfNotes, onPress, onDelete }) => {

const [isVisible, setIsVisible] = useState(true);
const removeElement = () => {
  setIsVisible((prev) => !prev);
};
  return (
    <View>    
   { isVisible && 
    <View index={index} style={{flexDirection: 'row', alignItems: 'center'}}>
       <View>
          <TouchableOpacity onPress={removeElement}>
            <MaterialCommunityIcons name="delete" size={24} color="black" />
          </TouchableOpacity>
        </View>
    <TouchableOpacity style={styles.wraper} onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.categoryText}>{category}</Text>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>{numberOfNotes}</Text>
        </View>
      </View>
    </TouchableOpacity>
    </View>
}
</View>
  );
};

const styles = StyleSheet.create({
  wraper: {
    alignItems: "center",
    width: "60%",
    margin: "5%",
    backgroundColor: "#007aff",
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: "20%",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: 'center',
    flexWrap: "wrap"
  },
  categoryText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  numberContainer: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  numberText: {
    fontSize: 20,
    color: '#007aff',
    fontWeight: 'bold'
  }
});

export default CustomNotesCategory;
