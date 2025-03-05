import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';

interface HeaderTitleProps {
  title: string;
  containerStyle?: ViewStyle;
}

const HeaderTitle = (props: HeaderTitleProps) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontWeight: 600,
    fontSize: 32,
    lineHeight: 22,
  },
});

export default HeaderTitle;
