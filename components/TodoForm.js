import React, { Component }  from 'react';
import { View, StyleSheet, TextInput, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import TodoList from '../components/TodoList'
import Input from '../components/Input'
import { Button } from 'react-native-elements';
import { addTodo } from '../actions';

class TodoForm extends Component {
  constructor(props){
    super(props);
    this.state ={
      text: ''
    };
  }
  onChangeText(text){
    this.setState({
      text
    });
  }
    onPress(){
      this.props.dispatchAddTodo(this.state.text);
      this.setState({ text: ''});
    }


  render() {
    const { text } = this.state;
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
              title="Add"
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
    flex: 6,
    paddingLeft: 20,
  },
  buttonContainer:{
    flex: 2,
  },
})

//const mapDispatchToProps = dispatch => {
//  return{
//    dispatchAddTodo: text => dispatch(addTodo(text))
//  }
//}

export default connect(null, {
  dispatchAddTodo: addTodo
})(TodoForm);
