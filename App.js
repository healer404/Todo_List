import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, TextInput, View, Keyboard} from 'react-native';
import Task from "./component/Task";

export default function App() {
    // getting the value to be sent
    const [task, setTask] = useState();

    // saving the task send into the array of tasks
    const [taskItems, setTaskItems] = useState([]);

    // sent task handler function
    const  handleAddTask = () => {
        // Keyboard will be dismissed after sending the task
        Keyboard.dismiss();
        // Save the value of the task sent to the array
        setTaskItems([...taskItems, task]);
        // set the sent task handler to null
        setTask(null);
    }

    const completeTask = (index) => {
        // Copy of the list of tasks
        let itemsCopy = [...taskItems];
        // Remove the task with the corresponding index (index of the task, the number of data to be removed)
        itemsCopy.splice(index, 1);

        // Update the list of tasks
        setTaskItems(itemsCopy);
    }

  return (
    <View style={styles.container}>

      {/*Today's Task*/}
      <View style={styles.tasksWrapper}>
        {/*Header Title*/}
        <Text style={styles.sectionTitle}>Today's Task</Text>

        {/*Tasks Container*/}
        <View style={styles.items}>
            {
                taskItems.map((item, index) => {
                  return (
                      <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                          <Task text={item}/>
                      </TouchableOpacity>
                      )
                })
            }
        </View>

      </View>

      {/*Writing a Task*/}
      <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}>

          <TextInput
              style={styles.input}
              placeholder={'Write a Task'}
              value={task}
              onChangeText={text=>setTask(text)}
          />
          <TouchableOpacity onPress={() => handleAddTask()}>
              <View style={styles.addWrapper}>
                  <Text style={styles.addText}>
                      +
                  </Text>
              </View>
          </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED'
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    padding: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {

  },
});
