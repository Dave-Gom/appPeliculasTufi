/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Background from './components/background/Background';
import AppRoutes from './routes/AppRouter';

function App(): React.JSX.Element {
  return (
    <Background>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </Background>
  );
}

export default App;
