import React from 'react';
import { View, Text, Button, plat } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { NavigationActions } from 'react-navigation';

import Home from './pages/Home'
import Instructions from './pages/Instructions'
import Todos from './pages/Todos'
import MapViewer from './pages/MapViewer'
import Carousel from './components/Carousel'


export default StackNavigator({
  Home: {
    screen: Home,
    navigationOptions:{
      title: '',
      headerStyle: {
        backgroundColor: '#000',
        borderBottomColor: '#000',
      },
      headerTransparent:{
      },
    },
  },
  Instructions: {
    screen: Instructions,
    navigationOptions:{
      title: 'Introdução',
      headerStyle: {
        backgroundColor: '#000',
        borderBottomColor: 'rgba(255,255,255,.1)',
        paddingBottom: 15,
      },
      headerTitleStyle: {
        color: '#FFF',
        alignSelf: 'center',
        alignItems: 'center',
      },
    },
  },
  Todos: {
    screen: Todos,
    navigationOptions:{
      title: 'ToDo X',
      headerStyle: {
        backgroundColor: '#000',
        borderBottomColor: 'rgba(255,255,255,.1)',
        paddingBottom: 15,
      },
      headerTitleStyle: {
        color: '#FFF',
        alignItems: 'center',
        alignSelf: 'center',
      },
    },
  },
  MapViewer: {
    screen: MapViewer,
    navigationOptions:{
      title: 'ToDo X',
      headerStyle: {
        backgroundColor: '#000',
        borderBottomColor: 'rgba(255,255,255,.1)',
        paddingBottom: 15,
      },
      headerTitleStyle: {
        color: '#FFF',
        alignItems: 'center',
        alignSelf: 'center',
      },
    },
  },
});
