import React, { Component }  from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import TodoList from '../components/TodoList'
import Input from '../components/Input'

export default class TodoForm extends Component {
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
      <View style={styles.todoFormContainer}>}>
        <Input/>
        <TodoList todos={this.state.todos}/>
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
