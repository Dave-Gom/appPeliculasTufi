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
import {NavTheme} from './themes/NavigationTheme';
import ThemeProvider from './themes/ThemeProvider';

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <Background>
        <NavigationContainer theme={NavTheme}>
          <AppRoutes />
        </NavigationContainer>
      </Background>
    </ThemeProvider>
  );
}

export default App;
