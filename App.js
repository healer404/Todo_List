import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from "./component/Task";

export default function App() {
  return (
    <View style={styles.container}>

      {/*Today's Task*/}
      <View style={styles.tasksWrapper}>
        {/*Header Title*/}
        <Text style={styles.sectionTitle}>Today's Task</Text>

        {/*Tasks Conteiner*/}
        <View style={styles.items}>
          <Task text={"Hello, This is task 1."}></Task>
          <Task text={"Hi, This is task 2."}></Task>
        </View>

      </View>

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
});
