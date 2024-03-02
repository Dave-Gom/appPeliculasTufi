import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {CustomHeaderFuncion} from '../utils/CustomHeaderFuncion';
import HomeRouter from './HomeRouter';

export type AppParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<AppParamList>();

const AppRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={CustomHeaderFuncion({
          title: 'Choose Movie',
          headerColor: 'rgba(0, 0, 0, 0)',
          tintColor: 'rgba(255, 255, 255, .86)',
        })}
        name="Home"
        component={HomeRouter}
      />
    </Stack.Navigator>
  );
};
export default AppRoutes;
