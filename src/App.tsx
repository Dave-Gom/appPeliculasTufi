/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Background from './components/background/Background';
import AppRoutes from './routes/AppRouter';

function App(): React.JSX.Element {
  return (
    <Background>
      <AppRoutes />
    </Background>
  );
}

export default App;
