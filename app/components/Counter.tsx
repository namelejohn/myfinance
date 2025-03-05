import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import COLORS from '../styles/colors';

interface HorizontalCounterProps {
  value: number;
  plus: () => void;
  minus: () => void;
  isHorizontal?: boolean;
}

const Counter: React.FC<HorizontalCounterProps> = ({
  value = 0,
  plus,
  minus,
  isHorizontal = true,
}) => {
  return (
    <View style={[styles.container, isHorizontal && {flexDirection: 'row'}]}>
      <TouchableOpacity
        hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}
        onPress={minus}>
        <View style={styles.button}>
          <Text style={[styles.buttonText, styles.leftBtnText]}>-</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.valueContainer}>
        <Text
          style={[
            styles.valueText,
            isHorizontal && {marginHorizontal: 16, marginVertical: 0},
          ]}>
          {value}
        </Text>
      </View>

      <TouchableOpacity
        hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}
        onPress={plus}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 4,
    paddingHorizontal: 2,
    backgroundColor: COLORS.secondary,
    borderRadius: 20,
  },
  button: {
    borderRadius: 5,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 22,
    lineHeight: 22,
    fontWeight: '700',
    color: COLORS.primary,
  },
  valueContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueText: {
    color: COLORS.white,
    fontWeight: '600',
  },
  buttonLeft: {},
  leftBtnText: {
    color: COLORS.white,
  },
});

export default Counter;
