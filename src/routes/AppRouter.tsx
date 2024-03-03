import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Movie} from '../models/interfaces/movie';
import MoviePage from '../pages/Movie';
import HomeRouter from './HomeRouter';

export type AppParamList = {
  Home: undefined;
  Movie: Movie;
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
      <Stack.Screen
        options={{headerShown: false}}
        name="Movie"
        component={MoviePage}
      />
    </Stack.Navigator>
  );
};
export default AppRoutes;
