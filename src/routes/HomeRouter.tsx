/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Awesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome6';

import Background from '../components/background/Background';
import Home from '../pages/Home';
import SeachPage from '../pages/SeachPage';
import {CustomTabNavigationHeaderFuncion} from '../utils/CustomHeaderFuncion';

export type HomeParamList = {
  HomePage: undefined;
  SeachPage: undefined;
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
            <LinearGradient
              colors={focused ? ['#60FFCA', '#19423400'] : ['transparent']}
              style={{borderRadius: 40, padding: 1}}
              useAngle={true}
              angle={140}>
              <View
                style={[
                  {
                    borderRadius: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                  focused
                    ? {height: 80, width: 80}
                    : {
                        height: 40,
                        width: 40,
                      },
                ]}>
                <Icon name="house" size={25} color={color} solid />
              </View>
            </LinearGradient>
          ),
        }}
      />
      <Tab.Screen
        name="SeachPage"
        component={SeachPage}
        options={{
          ...CustomTabNavigationHeaderFuncion({
            headerTitle: 'Search Movie',
            headerColor: 'rgba(0, 0, 0, 0)',
            tintColor: 'rgba(255, 255, 255, .86)',
          }),
          tabBarIcon: ({color, focused}) => (
            <LinearGradient
              colors={focused ? ['#60FFCA', '#19423400'] : ['transparent']}
              style={{borderRadius: 40, padding: 1}}
              useAngle={true}
              angle={140}>
              <View
                style={[
                  {
                    borderRadius: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                  focused
                    ? {height: 80, width: 80}
                    : {
                        height: 40,
                        width: 40,
                        alignSelf: 'flex-end',
                      },
                ]}>
                <Awesome5Icon name="search" size={25} color={color} solid />
              </View>
            </LinearGradient>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeRouter;
