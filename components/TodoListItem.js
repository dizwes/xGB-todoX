import React, { Component }  from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

const TodoListItem = ({ todo, onPressTodo }) => (
    <TouchableOpacity onPress={onPressTodo}>
      <View style={styles.todoItem}>
          <Text style={[
            styles.todoText,
            todo.done? styles.lineThrough : null
          ]}
          >
            {todo.text}
          </Text>
      </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
  todoItem:{
    borderBottomColor: 'rgba(0,255,252,.1)',
    borderBottomWidth: 0.3,
    paddingVertical: 10,
  },
  todoText:{
    color:'#FFF',
  },
  lineThrough:{
    textDecorationLine: 'line-through',
    color: 'rgba(0,255,252,1)',
  }
})
const mapStateToProps = state => {
  const { todos } = state;
  return { todos };
}
export default TodoListItem;
