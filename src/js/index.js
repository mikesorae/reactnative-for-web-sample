import React from 'react';
import { Text, AppRegistry } from 'react-native';

const App = () => {
  return <Text>Hello World!</Text>
}

// register the app
AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('app')
});
