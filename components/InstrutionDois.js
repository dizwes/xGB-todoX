import React, { Component } from 'react'
import {StyleSheet, View, Image} from 'react-native'
import TypeWriter from 'react-native-typewriter'

export default class InstructionDois extends Component {
  render() {
    return(
      <View style={styles.titleContainer}>
        <TypeWriter style={styles.title} typing={1}>Salve a localização da tarefa a ser concluída! </TypeWriter>
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
