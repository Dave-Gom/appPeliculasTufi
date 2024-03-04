import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface TabBarButtonProps {
  children: JSX.Element | JSX.Element;
  active?: boolean;
}

const TabBarButton = ({active = false, children}: TabBarButtonProps) => {
  return active ? (
    <LinearGradient
      colors={['#60FFCA', '#19423400']}
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
          {height: 80, width: 80},
        ]}>
        {children}
      </View>
    </LinearGradient>
  ) : (
    <View
      style={[
        {
          borderRadius: 40,
          justifyContent: 'center',
          alignItems: 'center',
        },
        {height: 80, width: 80},
      ]}>
      {children}
    </View>
  );
};

export default TabBarButton;
