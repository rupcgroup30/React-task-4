import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { Button, Modal, Layout, Input, Card } from "@ui-kitten/components";
import Note from "../components/Note";
import { NotesContext } from "../components/Context";

const NotesScreen = ({ route }) => {
  const { category } = route.params;
  const [isVisible, setIsVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [indexToDelete, setIndexToDelete] = useState(-1);
  const notesContext = useContext(NotesContext);
  const notesForCategory = notesContext.notes[category];

  function addComponent() {
    setIndexToDelete((prev) => prev + 1)
    if (!notesContext.notes[category]) {
      notesContext.setNotes({
        ...notesContext.notes,
        [category]: [<Note index={indexToDelete} text={inputValue} />],
      });
    } else {
      notesContext.setNotes({
        ...notesContext.notes,
        [category]: [
          ...notesContext.notes[category],
          <Note index={indexToDelete} text={inputValue} />,
        ],
      });
    }
    setIsVisible(false);
  }


  return (
    <Layout style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>{category}</Text>
          {notesForCategory
            ? notesForCategory.map((note) => (
                note
              ))
            : ""}
          <Button
            style={styles.button}
            onPress={() => {
              setIsVisible(true);
            }}
          >
            Add note
          </Button>
          <Modal
            style={styles.modal}
            visible={isVisible}
            backdropStyle={styles.backdrop}
            onBackdropPress={() => setIsVisible(false)}
          >
            <Card disabled={true}>
              <Input
                size="large"
                multiline={true}
                style={{ margin: "5%" }}
                placeholder="Write your note here"
                onChangeText={(text) => setInputValue(text)}
              />
              <Button style={{ margin: "5%" }} onPress={addComponent}>
                Add
              </Button>
              <Button
                style={{ margin: "5%" }}
                onPress={() => setIsVisible(false)}
              >
                DISMISS
              </Button>
            </Card>
          </Modal>
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    margin: "5%",
  },
  title: {
    fontSize: "30%",
    fontWeight: "bold",
    margin: "5%",
  },
  wraper: {
    backgroundColor: "white",
    width: "70%",
    height: "30%",
    borderRadius: 10,
    shadowColor: "rgba(0 ,0, 0, 0.16)",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 6,
    margin: "5%",
  },
  note_container: {
    flex: 1,
  },
  button: {},
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    padding: "10%",
    width: "100%",
  },
});

export default NotesScreen;
