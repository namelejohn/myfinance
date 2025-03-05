import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import COLORS from '../styles/colors.ts';

interface ScreenBgProps {
  children?: React.ReactNode;
  showImgBg?: boolean;
}

const ScreenBg = ({children, showImgBg}: ScreenBgProps) => {
  const source: any = require('../assets/home_bg.png');

  if (!showImgBg) {
    return <View style={styles.background}>{children}</View>;
  }

  return (
    <ImageBackground
      source={source}
      style={styles.backgroundImage}
      resizeMode={'cover'}>
      {children}
    </ImageBackground>
  );
};

export default ScreenBg;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.screenBg,
  },
});
