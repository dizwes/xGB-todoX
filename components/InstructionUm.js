import React, { Component } from 'react'
import {StyleSheet, View, Image} from 'react-native'
import TypeWriter from 'react-native-typewriter'

export default class InstructionUm extends Component {
  render() {
    return(
      <View style={styles.titleContainer}>
        <TypeWriter style={styles.title} typing={1}>Adicione suas tarefas de forma rápida e simples! </TypeWriter>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  titleContainer:{
    paddingTop: 100,
    paddingHorizontal: 40,
  },
  title:{
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
  }
  })
