import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, TextInput, View} from 'react-native';
import Task from "./component/Task";

export default function App() {
  return (
    <View style={styles.container}>

      {/*Today's Task*/}
      <View style={styles.tasksWrapper}>
        {/*Header Title*/}
        <Text style={styles.sectionTitle}>Today's Task</Text>

        {/*Tasks Container*/}
        <View style={styles.items}>
          <Task text={"Hello, This is task 1."}></Task>
          <Task text={"Hi, This is task 2."}></Task>
        </View>

      </View>

      {/*Writing a Task*/}
      <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}>

          <TextInput
              style={styles.input}
              placeholder={'Write a Task'}
          />
          <TouchableOpacity>
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
