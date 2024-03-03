import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeRouter from './HomeRouter';

export type AppParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<AppParamList>();

const AppRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeRouter}
      />
    </Stack.Navigator>
  );
};
export default AppRoutes;
