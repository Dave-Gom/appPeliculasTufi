import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Background from '../components/background/Background';

export type AppParamList = {
  home: undefined;
};

const Stack = createStackNavigator<AppParamList>();

const AppRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        options={{headerShown: false}}
        name="home"
        component={() => <Background></Background>}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
