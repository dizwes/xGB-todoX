import React, { Component }  from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { connect } from 'react-redux';

const mapIcon = require('../assets/map-icon.png');
const TodoListItem = ({ todo, onPressTodo, onLongPressTodo }) => (
    <TouchableOpacity
    onPress={onPressTodo}
    onLongPress={onLongPressTodo}>
      <View style={styles.todoItem}>
          <Text style={[
            styles.todoText,
            todo.done? styles.lineThrough : null
          ]}
          >
            {todo.text}
          </Text>
          <Image
            style={styles.logotipo}
            source={mapIcon}
            style={{width: 25, height: 25}}
          />
      </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
  todoItem:{
    borderBottomColor: 'rgba(0,255,252,.1)',
    borderBottomWidth: 0.3,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  todoText:{
    color:'#FFF',
  },
  lineThrough:{
    textDecorationLine: 'line-through',
    color: 'rgba(0,255,252,1)',
  }
})
const mapStateToProps = state => {
  const { todos } = state;
  return { todos };
}
export default TodoListItem;
