import React from 'react';
import { View, Text } from 'react-native';
import { ActivityIndicator, Button } from 'react-native';
import Header from './components/header';

const App = () => {
  return (
    <View>
      <Header />
      <Text>Hello World!</Text>
    </View>
  )
}

export default App;