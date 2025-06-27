import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { useContext } from 'react';
import { NewContext } from '../context/newContext';
import { useSelector, useDispatch } from 'react-redux';
import { setCount , incrementCount, setName} from '../slices/counterSlices';


const SecondaryButton = () => {

    const count = useSelector((state) => state.counter.count);
    const name = useSelector((state) => state.counter.name);
    const dispatch = useDispatch();

  return (
    <View>
      <Text>SecondaryButton {count} {name} </Text>
      <Pressable onPress={()=> {
        dispatch(setCount(count+20));
        dispatch(setName("Shivam"));
      }}>
        <Text>
            Increase
        </Text>
      </Pressable>
    </View>
  )
}

export default SecondaryButton

const styles = StyleSheet.create({})