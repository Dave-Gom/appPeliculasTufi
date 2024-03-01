import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../pages/Home';
import {CustomHeaderFuncion} from '../utils/CustomHeaderFuncion';

export type AppParamList = {
  home: undefined;
};

const Stack = createNativeStackNavigator<AppParamList>();

const AppRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        options={CustomHeaderFuncion({
          title: 'Choose Movie',
          headerColor: 'rgba(0, 0, 0, 0)',
          tintColor: 'rgba(255, 255, 255, .86)',
        })}
        name="home"
        component={Home}
      />
    </Stack.Navigator>
  );
};
export default AppRoutes;
