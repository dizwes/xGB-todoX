import React, { Component }  from 'react';
import { View, StyleSheet, TextInput, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import TodoList from '../components/TodoList'
import Input from '../components/Input'
import { Button } from 'react-native-elements';
import { addTodo, updateTodo, setTodoText } from '../actions';

class TodoForm extends Component {
    onChangeText(text){
      this.props.dispatchSetTodoText(text)
    }
    onPress(){
      const { todo } = this.props;
      if(todo.id)
        return this.props.dispatchUpdateTodo(todo);
        const { text } = todo;
        this.props.dispatchAddTodo(text);
    }

  render() {
    const { text, id } = this.props.todo;
    return (
      <ScrollView>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Input
              onChangeText={text => this.onChangeText(text)}
              value={text}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              buttonStyle={{
                backgroundColor: "rgba(0, 0, 0, 1)",
                height: 40,
                borderColor: "rgba(0, 255, 252, 1)",
                borderWidth: 1,
                borderRadius: 3,
                color:'#000'
              }}
              title={id? "Salvar" : "Add"}
              onPress={() => this.onPress()}/>
          </View>
        </View>
        <TodoList />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  formContainer:{
    flexDirection: 'row',
    width:360,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  inputContainer:{
    flex: 4,
    paddingLeft: 20,
  },
  buttonContainer:{
    flex: 2,
  },
})

const mapStateToProps = state => {
  return{
    todo: state.editingTodo
  }
}

export default connect(mapStateToProps,
  {
  dispatchAddTodo: addTodo,
  dispatchSetTodoText: setTodoText,
  dispatchUpdateTodo: updateTodo
  })
  (TodoForm);
