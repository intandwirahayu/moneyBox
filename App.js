import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router/router.js';

LogBox.ignoreLogs(["Require cycle:", "Reanimated 2"]);

const App = () => {
  return(
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  );
};

export default App;