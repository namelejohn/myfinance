import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, ViewStyle} from 'react-native';

interface LinearViewProps {
  containerStyle?: ViewStyle;
  children?: React.ReactNode;
}

const LinearView: React.FC<LinearViewProps> = ({containerStyle, children}) => {
  return (
    <LinearGradient
      colors={['#2D017E', '#5201E4']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={[styles.gradient, containerStyle]}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 18,
    paddingHorizontal: 25,
    paddingVertical: 4,
  },
});

export default LinearView;
