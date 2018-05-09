import React, { Component }  from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

const TodoList = props => {
  const { todos } = props;
  const todoList = todos.map(todo =>{
    return <Text style={styles.todoText}> key=>{todo._id}{todo.description}</Text>
  })

    return(
      <ScrollView>
        <View style={styles.todoListContainer}>}>
          <View style={styles.todoItem}>
            {todoList}
          </View>
        </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
 todoListContainer:{
    backgroundColor: '#000',
    paddingTop: 15,
    paddingHorizontal: 5,
  },
  todoItem:{
    borderBottomColor: 'rgba(0,255,252,.1)',
    borderBottomWidth: 0.3,
    paddingVertical: 10,
  },
  todoText:{
    color:'#FFF',

  }
})

export default TodoList;
