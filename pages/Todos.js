import React, { Component }  from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CarouselSlider from '../components/Carousel'
import TodoForm from '../components/TodoForm'


export default class Todos extends Component {
  render() {
    return (
      <View style={styles.todoContainer}>}>
        <TodoForm />
      </View>
    );
  }
}
const styles = StyleSheet.create({
 todoContainer:{
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
  },
  textColor:{
    color:'#FFF',
  }
})
