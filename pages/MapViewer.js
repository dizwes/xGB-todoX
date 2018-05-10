import React, { Component }  from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CarouselSlider from '../components/Carousel'

export default class MapViewer extends Component {
  constructor(props){
    super(props)
    this.state = {todos: []}
  }
  componentWillMount(){
    axios
    .get('https://xgb-todoapi.herokuapp.com/api/todos')
    .then(response => { this.setState({ todos: response.data});})
    .catch(()=> {console.log('Erro na tentativa de obtenção dos dados')})
  }

  render() {
    return (
      <View style={styles.todoContainer}>}>
       {this.state.todos.map( todo=>
        (<Text key={todo._id} style={styles.textColor}>{todo.address}</Text>))}
      </View>
    );
  }
}
const styles = StyleSheet.create({
 todoContainer:{
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor:{
    color:'#FFF',
  }
})
