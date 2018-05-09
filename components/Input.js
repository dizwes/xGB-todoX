import React  from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const Input = ({ onChangeText, value }) =>(
  <TextInput
    style={{width: 320, height: 40, borderRadius: 3, borderColor: '#00fffc', borderWidth: 1, paddingHorizontal: 10, color: 'white'}}
    onChangeText={onChangeText}
    value={value}
    placeholder='Insira um todo'
    placeholderTextColor='#FFF'
  />
);

export default Input;
