import React, { Component }  from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import TodoList from '../components/TodoList'
import Input from '../components/Input'

export default class TodoForm extends Component {

  render() {
    return (
      <View style={styles.todoFormContainer}>}>
        <Input/>
        <TodoList/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
 todoFormContainer:{
    flex: 1,
    backgroundColor: '#000',
    height: 50,
  },
})
