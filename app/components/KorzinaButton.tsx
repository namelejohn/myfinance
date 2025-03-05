import {Image, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const trashIcon = require('../../app/assets/trash.png');

interface CartButtonProps {
  iconSize?: number;
}

const KorzinaButton = (props: CartButtonProps) => {
  const iconSize = props.iconSize || 60;
  const navigation: any = useNavigation();
  return (
    <Pressable
      style={styles.iconContainer}
      onPress={() => navigation.navigate('Cart')}>
      <Image
        source={trashIcon}
        style={[styles.icon, {width: iconSize, height: iconSize}]}
      />
    </Pressable>
  );
};

export default KorzinaButton;

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: 'transparent',
  },
  icon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});
