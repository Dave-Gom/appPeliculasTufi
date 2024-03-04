/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Awesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome6';

import TabBarButton from '../components/Buttons/TabBarButton';
import Background from '../components/background/Background';
import Home from '../pages/Home';
import SearchPage from '../pages/SearchPage';
import {CustomTabNavigationHeaderFuncion} from '../utils/CustomHeaderFuncion';

export type HomeParamList = {
  HomePage: undefined;
  SearchPage: undefined;
};

const HomeRouter = () => {
  const Tab = createBottomTabNavigator<HomeParamList>();

  return (
    <Tab.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        headerShown: false,
        tabBarBackground: () => <Background />,
        tabBarInactiveTintColor: 'white',
        tabBarActiveTintColor: 'white',
        tabBarStyle: {
          height: 80,
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingTop: 15,
        },
      }}
      sceneContainerStyle={{flex: 1}}>
      <Tab.Screen
        name="HomePage"
        component={Home}
        options={{
          ...CustomTabNavigationHeaderFuncion({
            headerTitle: 'Choose Movie',
            headerColor: 'rgba(0, 0, 0, 0)',
            tintColor: 'rgba(255, 255, 255, .86)',
          }),
          tabBarIcon: ({color, focused}) => (
            <TabBarButton active={focused}>
              <Icon name="house" size={25} color={color} solid />
            </TabBarButton>
          ),
        }}
      />
      <Tab.Screen
        name="SearchPage"
        component={SearchPage}
        options={{
          ...CustomTabNavigationHeaderFuncion({
            headerTitle: 'Search Movie',
            headerColor: 'rgba(0, 0, 0, 0)',
            tintColor: 'rgba(255, 255, 255, .86)',
          }),
          tabBarIcon: ({color, focused}) => (
            <TabBarButton active={focused}>
              <Awesome5Icon name="search" size={25} color={color} solid />
            </TabBarButton>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeRouter;
