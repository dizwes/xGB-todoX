import React, { Component }  from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CarouselSlider from '../components/Carousel';
import { Provider } from 'react-redux';

import TodoForm from '../components/TodoForm';

  import { createStore} from 'redux';
  import rootReducer from '../redurcers';

  import devToolsEnhancer from 'remote-redux-devtools';

const store = createStore(rootReducer, devToolsEnhancer())

export default class Todos extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.todoContainer}>}>
          <TodoForm />
        </View>
      </Provider>
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
