import React from 'react';
import {ImageBackground, StyleSheet, View, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export type BackgroundProps = {
  containerStyle?: ViewStyle;
  style?: ViewStyle;
  children?: JSX.Element | JSX.Element[];
  gradientColors?: string[];
};

const Background = ({
  children = <></>,
  containerStyle,
  style,
  gradientColors,
}: BackgroundProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <LinearGradient
        colors={gradientColors ?? ['#2E1371', '#130B2B']}
        style={styles.gradient}
        angle={45}>
        <ImageBackground
          source={require('../../../assets/img/Background.png')}
          style={styles.background}
        />
        <View style={[styles.container, style]}>{children}</View>
      </LinearGradient>
    </View>
  );
};

export default Background;

const styles = StyleSheet.create({
  container: {position: 'absolute', width: '100%', height: '100%'},
  gradient: {flex: 1},
  background: {width: '100%', height: '100%'},
});
