import React, { Component }  from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

export default class TodoList extends Component {

  state = {
    todos: [],
  };

  componentDidMount(){
    axios.get('https://xgb-todoapi.herokuapp.com/api/todos')
    .then(res =>{
      this.setState({todos: res.data})
    })
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.todoListContainer}>}>
          {this.state.todos.map(todo=>
            <View style={styles.todoItem}>
            <Text style={styles.todoText}>{this.todo.address}</Text>
          </View>
          )}
        </View>
      </ScrollView>
    );
  }
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
