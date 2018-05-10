import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View, Text, StatusBar, StyleSheet, Image } from 'react-native';

import Logo from '../components/Logo'

const logotipo = require('../assets/xgb-logotipo.png');

export default class Home extends Component {
  render() {
    return (
      <View style={styles.homeContainer}>
        <StatusBar
          hidden={true}
        />
        <View style={styles.boxLogo}>
          <Image
            style={styles.logotipo}
            source={logotipo}
            style={{width: 200, height: 70}}
          />
          <View style={styles.subtitle}>
            <Logo />
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.Button}>
            <Button
              buttonStyle={{
                backgroundColor: "rgba(0, 0, 0, 1)",
                width: 200,
                height: 45,
                borderColor: "rgba(0, 255, 252, 1)",
                borderWidth: 1,
                borderRadius: 5,
                color:'#000'
              }}
              title="Acessar"
              onPress={() =>{
              this.props.navigation.navigate('Instructions');
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer:{
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
  },
  textCreated:{
    color: '#FFF',
    textAlign: 'center',
  },
  boxLogo: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '30%',

  },
  logotipo:{
    flex:1,
    flexDirection: 'column',
    position: 'absolute',
    marginTop: 120,
  },
  subtitle:{
    paddingBottom: 0,
    paddingTop: 50,
  },
  content:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '70%',
    marginTop: 100,
  },
})
