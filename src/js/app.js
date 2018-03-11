import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import { View, Text } from 'react-native';
import { ActivityIndicator, Button } from 'react-native';
import Header from './components/header';

const App = () => {
  return (
    <Router>
      <View>
        <Header />
        <Text>Hello World!</Text>
        <Link to='/'>to top</Link>
        <Link to='/test'>to test</Link>
        <Route exact path='/' component={()=>(<Text>top</Text>)} />
        <Route path='/test' component={()=>(<Text>test</Text>)} />
      </View>
    </Router>
  )
}

export default App;