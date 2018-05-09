import React, { Component }  from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

export default class TodoList extends Component {

    constructor(props){
      super(props);

      state = {
        todos: [],
      };
    }

  componentDidMount(){
    axios
    .get('https://xgb-todoapi.herokuapp.com/api/todos')
    .then(response => {
      const { todos } = response.data;
      this.setState({
        todos: todos
      });
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
