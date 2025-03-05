import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import COLORS from '../styles/colors.ts';

interface CustomInputProps extends TextInputProps {
  label?: string;
  icon?: any;
  inputStyle?: TextStyle;
  containerStyle?: ViewStyle;
  clear?: () => void;
}

const CustomInput: React.FC<CustomInputProps> = ({label, ...props}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.inputContainer, props.containerStyle]}>
        {props.icon && <Image source={props.icon} style={styles.icon} />}
        <TextInput
          {...props}
          style={[styles.input, props.icon && {width: '83%'}, props.inputStyle]}
          placeholderTextColor={'#999999'}
        />
        {props.clear && props.value && (
          <Pressable onPress={props.clear} style={styles.clearContainer}>
            <Image
              source={require('../assets/clear.png')}
              style={styles.clearIcon}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: 700,
    color: COLORS.placeholder,
    marginLeft: 2,
    marginBottom: 8,
    textTransform: 'capitalize',
  },
  inputContainer: {
    backgroundColor: COLORS.inputBg,
    borderRadius: 24,
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 6},
    // shadowOpacity: 0.2,
    // shadowRadius: 8,
    // elevation: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: '89%',
    height: 47,
    fontSize: 16,
    color: COLORS.white,
    marginLeft: 8,
  },
  icon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  clearIcon: {
    width: 20,
    height: 20,
  },
  clearContainer: {
    marginRight: 4,
  },
});

export default CustomInput;
