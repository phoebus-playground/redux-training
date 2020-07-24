import React, {useState} from 'react';
import {View, TextInput, Text, Button, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import TodoAction from '../store/ducks/todoSauce';

export default function Main() {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState();
  const todoList = useSelector(state => state.todo.listTodo);

  return (
    <View style={{margin: 20}}>
      <Text>Todo Name</Text>
      <TextInput
        value={todoText}
        onChangeText={setTodoText}
        underlineColorAndroid="#000"
      />
      <Button
        title="Adicionar TODO"
        onPress={() => {
          dispatch(
            TodoAction.addTodo({
              id: Math.random().toString(),
              name: todoText,
            }),
          );
          setTodoText('');
        }}
      />
      <FlatList
        data={todoList}
        ListHeaderComponent={() => (
          <Text style={{fontSize: 20, marginTop: 10}}>Lista de TODOS</Text>
        )}
        renderItem={({item}) => (
          <Text style={{fontSize: 20, padding: 10}} key={item.id}>
            {item.name}
          </Text>
        )}
      />
    </View>
  );
}
