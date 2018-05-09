import React, { Component } from 'react'
import {StyleSheet, View, Image} from 'react-native'
import TypeWriter from 'react-native-typewriter'

export default class Logo extends Component {
  render() {
    return(
       <TypeWriter style={styles.title} typing={1}>Olá, seja bem vindo(a) ao meu projeto Teste! </TypeWriter>
    )
  }
}

const styles = StyleSheet.create({
title:{
  flex: 1,
  color: '#FFF',
  textAlign: 'center',
  fontSize: 16,
}
})
