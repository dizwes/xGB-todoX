import React, { Component } from 'react';
import { StyleSheet, Text, View , Image} from 'react-native'
import Carousel from 'react-native-carousel'

import InstructionUm from '../components/InstructionUm';
import InstructionDois from '../components/InstrutionDois';
import InstructionTres from '../components/InstructionTres';

const handClick= require('../assets/hand-click.png');
const map= require('../assets/map.png');
const mapViewer= require('../assets/map-viewer.png');


export default class CarouselSlider extends Component {
  render() {
    return (
    <Carousel
      animate={false}
      indicatorColor="#00fffc"
      indicatorSize={20}
      inactiveIndicatorColor="#FFF"
      indicatorOffset={525}
    >
      <View style={styles.container}>
        <Image
          style={styles.logotipo}
          source={handClick}
          style={styles.logotipo}
        />
        <InstructionUm style={styles.instruction}/>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.logotipo}
          source={map}
        />
        <InstructionDois style={styles.instruction}/>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.logotipo}
          source={mapViewer}
        />
        <InstructionTres style={styles.instruction}/>
      </View>
    </Carousel>
    )
  }
}

const styles = StyleSheet.create({
  textColor:{
    color:'#fff',
  },
  container: {
    width: 376,
    height: 500,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  logotipo:{
    width: 100,
    height: 100,
  },
})
