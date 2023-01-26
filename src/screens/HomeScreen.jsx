import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React, { useState, useContext } from "react";
import CustomNotesCategory from "../components/CustomNotesCategory";
import {Layout } from "@ui-kitten/components";
import { Button, Card, Modal, Input } from "@ui-kitten/components";
import { NotesContext } from "../components/Context";

const HomeScreen = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [components, setComponents] = useState([]);
  const notesContext = useContext(NotesContext);
  const [indexToDelete, setIndexToDelete] = useState(-1);

  function addComponent() {
     setIndexToDelete((prev) => prev + 1)
    setComponents((prevComponents) => [...prevComponents, <CustomNotesCategory
        category={inputValue}
        numberOfNotes={(notesContext.notes[inputValue] == 0 || notesContext.notes[inputValue]== undefined)  ?0 :notesContext.notes[inputValue].length }
        key={prevComponents.length}
        onPress={() => navigation.navigate("Notes",{ category: inputValue })}
        index={indexToDelete}
      />
    ]);
    setVisible(false);
   
  }
  
 

  return (
 
      <Layout style={{ flex: 1, alignItems: "center" }}>
        <ScrollView>

        <View style={styles.container}>
          <Text style={styles.title}>My Notes</Text>
          <View style={styles.categories}>
           
          
            {components.map((component) => component)}

            <Button onPress={() => setVisible(true)}>Add category</Button>
            <Modal
              style={styles.modal}
              visible={visible}
              backdropStyle={styles.backdrop}
              onBackdropPress={() => setVisible(false)}
            >
              <Card disabled={true}>
                <Input
                  style={{ margin: "5%" }}
                  placeholder="Add new category"
                  onChangeText={(text) => setInputValue(text)}
                />
                <Button style={{ margin: "5%" }} onPress={addComponent}>
                  Add
                </Button>
                <Button
                  style={{ margin: "5%" }}
                  onPress={() => setVisible(false)}
                >
                  DISMISS
                </Button>
              </Card>
            </Modal>
          </View>
        </View>
        </ScrollView>
      </Layout>

  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  title: {
    fontWeight: "bold",
    alignSelf: "center",
    margin: "5%",
    fontSize: "30%"
  },
  categories: {
    alignItems: "center",
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    padding: "10%",
  },
});

export default HomeScreen;
