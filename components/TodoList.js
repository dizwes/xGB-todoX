import React, { Component }  from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import {  toggleTodo, setEditingTodo } from '../actions';


const todoList = ({
      todos,
      dispatchToggleTodo,
      dispatchSetEditingTodo }) => (
      <ScrollView style={styles.todoListContainer}>
          {todos.map( todo =>
            <TodoListItem
              key={todo.id}
              todo={todo}
              onPressTodo={() => dispatchToggleTodo(todo.id)}
              onLongPressTodo={() => dispatchSetEditingTodo(todo)}
              />)}
      </ScrollView>
)

const styles = StyleSheet.create({
 todoListContainer:{
    backgroundColor: '#000',
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  todoItem:{
    borderBottomColor: 'rgba(0,255,252,.1)',
    borderBottomWidth: 0.3,
    paddingVertical: 10,
  },
  todoText:{
    color:'#FFF',
  },
})
const mapStateToProps = state => {
  const { todos } = state;
  return { todos };
}
export default connect(
  mapStateToProps,
  { dispatchToggleTodo: toggleTodo,
    dispatchSetEditingTodo: setEditingTodo
  })(todoList);
