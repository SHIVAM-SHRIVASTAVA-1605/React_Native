import React, { useCallback, useState, useRef } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { AddButton } from '../../assets';
import ListView from './ListView';

const ToDoComponent = () => {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const inputRef = useRef(null);
  const openRowRef = useRef(null);

  const onSendPress = useCallback(() => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    if (openRowRef.current) openRowRef.current.close();

    if (editingId !== null) {
      setData(prev =>
        prev.map(task =>
          task.id === editingId ? { ...task, text: trimmedInput } : task
        )
      );
      setEditingId(null);
    } else {
      setData(prev => [...prev, { id: Date.now(), text: trimmedInput }]);
    }

    setInput('');
  }, [input, editingId]);

  const onDeletePress = useCallback(taskId => {
    setData(prev => prev.filter(task => task.id !== taskId));
  }, []);

  const onContentPress = useCallback((taskId, taskText) => {
    setEditingId(taskId);
    setInput(taskText);
    inputRef.current?.focus();
  }, []);

  const renderItem = useCallback(
    ({ item, index }) => (
      <ListView
        item={item}
        index={index}
        onContentPress={onContentPress}
        onDeletePress={onDeletePress}
        openRowRef={openRowRef}
        setInput={setInput}
      />
    ),
    [onContentPress, onDeletePress]
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Simple Todo</Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
        bounces={false}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.bottomContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            ref={inputRef}
            value={input}
            placeholder="Add a new Task"
            placeholderTextColor="#777"
            onChangeText={setInput}
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity onPress={onSendPress}>
          <AddButton />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ToDoComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  heading: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: '600',
    color: '#fff',
    marginVertical: 20,
  },
  listContent: {
    paddingBottom: 150,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 20,
  },
  textInputContainer: {
    borderWidth: 1.5,
    borderColor: '#3E1671',
    marginLeft: 25,
    marginRight: 15,
    width: '75%',
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: '#000',
  },
  textInput: {
    paddingLeft: 20,
    color: '#fff',
  },
});