import React, { Component }  from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

import CarouselSlider from '../components/Carousel'

export default class Instructions extends Component {
  render() {
    return (
      <View style={styles.instructionsContainer}>
        <StatusBar
          hidden={true}
        />
        <CarouselSlider/>
        <Text style={styles.textColor}
            onPress={() =>{
              this.props.navigation.navigate('Todos');
            }}
        >Pular Introdução >>></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  instructionsContainer:{
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor:{
    color:'#00fffc',
    paddingBottom: 20,
  }
})
