/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Awesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome6';

import Background from '../components/background/Background';
import Home from '../pages/Home';
import {styles} from '../themes/styles';

const HomeRouter = () => {
  const Tab = createBottomTabNavigator();

  return (
    <View style={styles.wrapper}>
      <Tab.Navigator
        initialRouteName="HomePage"
        screenOptions={{
          headerShown: false,
          tabBarBackground: () => <Background />,
          tabBarInactiveTintColor: 'white',
          tabBarActiveTintColor: 'white',
        }}>
        <Tab.Screen
          name="HomePage"
          component={Home}
          options={{
            title: '',
            tabBarIcon: ({color, focused}) => (
              <TouchableOpacity onPress={() => console.log('hola')}>
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
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen
          name="SeachPage"
          component={() => <></>}
          options={{
            title: '',
            tabBarIcon: ({color, focused}) => (
              <TouchableOpacity onPress={() => console.log('hola')}>
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
              </TouchableOpacity>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default HomeRouter;
