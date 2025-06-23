import React, { useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { DeleteIcon, EditIcon } from '../../assets';
import {Swipeable} from 'react-native-gesture-handler';

const ListView = ({
  item,
  index,
  onContentPress = () => {},
  onDeletePress = () => {},
  openRowRef,
  setInput,
}) => {
  const swipeableRef = useRef(null);

  const handleSwipeableOpen = () => {
    setInput('');
    if (openRowRef.current && openRowRef.current !== swipeableRef.current) {
      openRowRef.current.close();
    }
    openRowRef.current = swipeableRef.current;
  };

  const leftSwipe = () => (
    <TouchableOpacity
      style={styles.leftActionContainer}
      onPress={() => onDeletePress(item.id)}>
      <DeleteIcon width={25} height={25} />
    </TouchableOpacity>
  );

  const rightSwipe = () => (
    <TouchableOpacity
      onPress={() => onContentPress(item.id, item.text)}
      style={styles.rightActionContainer}>
      <EditIcon width={25} height={25} />
    </TouchableOpacity>
  );

  return (
    <Swipeable
      ref={swipeableRef}
      onSwipeableOpen={handleSwipeableOpen}
      renderLeftActions={leftSwipe}
      renderRightActions={rightSwipe}>
      <View key={index} style={styles.taskContainer}>
        <Text style={styles.taskText}>{item.text}</Text>
      </View>
    </Swipeable>
  );
};

export default ListView;

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: '#3E1671',
    marginHorizontal: 25,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskText: {
    color: '#fff',
    flex: 1,
  },
  leftActionContainer: {
    backgroundColor: '#D83A56',
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
  },
  rightActionContainer: {
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
  },
});