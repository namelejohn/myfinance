import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import {observer} from 'mobx-react';
import {useStore} from '../stores/StoreContext';
import COLORS from '../styles/colors';
import {FONT_WEIGHT} from '../styles/constants';
import Counter from './Counter.tsx';
import {Product} from '../types';

interface CartItemProps {
  item: Product;
  navigateToCheckout: () => void;
}

const CartItem: React.FC<CartItemProps> = ({item, navigateToCheckout}) => {
  const {productStore} = useStore();
  const {handlePlus, handleMinus, removeFromCart, handleBuy} = productStore;
  const quantity = productStore.getItemQuantity(item.id);

  const handleBuyItem = (id: number) => {
    handleBuy(id);
    navigateToCheckout();
  };

  const renderRightActions = () => (
    <View style={styles.rightActionContainer}>
      <Pressable
        style={styles.deleteButton}
        onPress={() => removeFromCart(item.id)}>
        <Image
          source={require('../assets/remove.png')}
          style={styles.icon}
          resizeMode="contain"
        />
      </Pressable>
    </View>
  );

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      overshootFriction={8}
      overshootRight={false}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <FastImage
            source={{uri: item.image}}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>${item.price}</Text>
          <View style={styles.actionContainer}>
            <Counter
              value={quantity}
              plus={() => handlePlus(item)}
              minus={() => handleMinus(item.id)}
            />
            <Pressable
              style={styles.buyBtnContainer}
              onPress={() => handleBuyItem(item.id)}>
              <Text style={styles.buyBtnText}>Buy</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Swipeable>
  );
};

export default observer(CartItem);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#9D2226',
    marginBottom: 16,
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 12,
  },
  imageContainer: {
    width: '25%',
    height: 80,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    width: '74%',
    justifyContent: 'space-around',
  },
  name: {
    fontSize: 16,
    fontWeight: FONT_WEIGHT,
    color: COLORS.white,
  },
  price: {
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.white,
    marginTop: 4,
  },
  totalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  total: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '600',
  },
  rightActionContainer: {
    justifyContent: 'center',
    width: 60,
    marginBottom: 16,
    marginRight: 16,
  },
  deleteButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  buyBtnContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 40,
    padding: 10,
    paddingVertical: 5,
    alignItems: 'center',
  },
  buyBtnText: {
    fontSize: 16,
    fontWeight: 700,
  },
  actionContainer: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    marginTop: 10,
  },
});
