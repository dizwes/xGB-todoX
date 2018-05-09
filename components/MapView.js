import React, { Component }  from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CarouselSlider from '../components/Carousel'

export default class MapView extends Component {
  render() {
    return (
      <View style={styles.todoContainer}>}>
        <Text style={styles.textColor}>MapView</Text>
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
