import { StyleSheet, Text, Platform } from 'react-native'
import React from 'react'
import { Card, Button } from 'react-native-paper'

const TaskItem = ({title,description,date,id, isComplete}) => {
  return (
    <Card style={styles.card}>
        {isComplete && 
        <Chip
            icon={"calender-multiple-check"}
            style={{ margin: 3, marginLeft: "auto" }} 
            mode = "outlined"> 
                Task Done 
        </Chip>}

        <Card.Title title={title} />
        <Card.Content style = {styles.padding} title={title} />
        <Card.Content>
            <Text variant = "titleLarge">{description}</Text>
        </Card.Content>
        <Card.Actions
            style={{
                width: "100%",
                display: "flex",
                ...styles.padding,
            }}
        >
            <Button style={{ marginRight: "auto" }}>Delete </Button>
            <Button> Complete </Button>
        </Card.Actions>
    </Card>
  )
}

export default TaskItem

const styles = StyleSheet.create({
    padding: {
        padding: 12,

    },
    card: {
        margin: 10,
        ...Platform.select({
            android: {
                elevation: 10,
            },
            ios: {
                shadowColor: "black",
                shadowOffset: { width: 2, height: 4 },
                shadowOpacity: 0.4,
                shadowRadius: 10,
            },
        }),
    },
});