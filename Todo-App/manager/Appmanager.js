import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { AppScreens, DUMMY_TASKS } from '../Utils/constants';
import AddTaskScreen from '../screens/AddTaskScreen';
import HomeScreen from '../screens/HomeScreen';

const Appmanager = () => {
    const [currentScreen, setCurrentScreen] = useState(AppScreens.HomeScreen);
    const [tasks, setTasks] = useState([...DUMMY_TASKS]);
  return (
    <View>
      {currentScreen===AppScreens.AddTaskScreen ?
        (<AddTaskScreen/> ) 
        : 
        (<HomeScreen tasks={tasks}/>)
       }
    </View>
  )
}

export default Appmanager

const styles = StyleSheet.create({})