import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

export type AppParamList = {
  home: undefined;
};

const Stack = createStackNavigator<AppParamList>();

const AppRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="home" component={() => <></>} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
