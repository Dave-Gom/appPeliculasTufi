/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Background from './components/background/Background';
import {AppConfig} from './config/appConfig';

function App(): React.JSX.Element {
  console.log(AppConfig);

  return <Background />;
}

export default App;
