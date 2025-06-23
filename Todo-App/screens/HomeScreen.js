import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import TaskItem from '../components/TaskItem'

const HomeScreen = ({tasks}) => {
  return (
    <View>
        {/* <Button mode="outlined"> All Tasks</Button> */}
      <Text>HomeScreen</Text>
    <FlatList 
        data={tasks} 
        keyExtractor={(item, index) => item.title + index}
        renderItem={(iter) => (
            <TaskItem
                date = {iter.item.date} 
                title={iter.item.title} 
                description={iter.item.description} 
                id={iter.item.id}
                isComplete={iter.item.isComplete}
            />
        )}
    />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})