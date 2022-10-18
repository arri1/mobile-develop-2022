import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, FlatList, Text, View, TouchableOpacity} from 'react-native';
import {Container} from '../components/Container';
import {Navbar} from '../laba1/Navbar';
import {AddTodo} from '../laba1/AddTodo';
import {Todo} from '../laba1/Todo';

export const Laba1 = () => {
  const [todos, setTodos] = useState([])

  const addTodo = title => {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      }
    ])
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <Container showArrow={true}>
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem = {({ item }) => <Todo todo={item} onRemove={removeTodo} />} 
        />

      </View>
    </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
