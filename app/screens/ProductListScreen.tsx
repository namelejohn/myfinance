import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {RecordType} from '../types';
import {useStore} from '../stores/StoreContext.tsx';
import {observer} from 'mobx-react';
import COLORS from '../styles/colors.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import ScreenBg from '../components/ScreenBg.tsx';
import LinearView from '../components/LinearView.tsx';

interface HomeScreenProps {
  navigation: any;
}

const ProductListScreen: React.FC<HomeScreenProps> = props => {
  const {productStore} = useStore();
  const {incomeBalance, expenseBalance, name} = productStore;
  const balance = incomeBalance - expenseBalance;

  function onCreateRecord(type: RecordType) {
    props.navigation.navigate('CreateRecord', {type: type});
  }

  function navToDetail(id: number) {
    props.navigation.navigate('NewsDetail', {id});
  }

  return (
    <ScreenBg showImgBg>
      <SafeAreaView edges={[]} style={styles.mainContainer}>
        <Pressable
          onPress={() => props.navigation.navigate('HistoryTab')}
          style={{alignSelf: 'flex-end', marginRight: 30, marginBottom: 20}}>
          <LinearView>
            <Text style={{fontSize: 18, fontWeight: 600, color: COLORS.white}}>
              History
            </Text>
          </LinearView>
        </Pressable>
        <View style={styles.headerImgContainer}>
          <ImageBackground
            source={require('../assets/card.png')}
            resizeMode={'contain'}
            style={styles.image}>
            <View
              style={{
                position: 'absolute',
                top: 20,
                left: 20,
              }}>
              <Text
                style={{
                  color: COLORS.grayText,
                  fontWeight: 500,
                }}>
                Balance
              </Text>
              <Text
                style={{
                  color: COLORS.white,
                  fontWeight: 500,
                  fontSize: 20,
                }}>
                {balance}
                <Text
                  style={{
                    color: '#C15BFF',
                    fontSize: 10,
                    fontWeight: 700,
                  }}>
                  {'  '}
                  USD
                </Text>
              </Text>
            </View>

            <Text
              style={{
                position: 'absolute',
                bottom: 20,
                left: 20,
                color: COLORS.white,
                fontSize: 24,
                fontWeight: 600,
              }}>
              Hello {name}!
            </Text>
            <View
              style={{
                position: 'absolute',
                top: 20,
                right: 20,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{alignItems: 'center', marginRight: 10}}>
                <Text
                  style={{
                    color: COLORS.white,
                    fontWeight: 600,
                    marginBottom: 8,
                  }}>
                  Income
                </Text>
                <View
                  style={{
                    backgroundColor: COLORS.green,
                    borderRadius: 24,
                    paddingHorizontal: 12,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: COLORS.white, fontWeight: 600}}>
                    ${incomeBalance}
                  </Text>
                </View>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text
                  style={{
                    color: COLORS.white,
                    fontWeight: 600,
                    marginBottom: 8,
                  }}>
                  Expense
                </Text>
                <View
                  style={{
                    backgroundColor: COLORS.red,
                    borderRadius: 24,
                    paddingHorizontal: 12,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: COLORS.white, fontWeight: 600}}>
                    ${expenseBalance}
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginTop: 20,
          }}>
          <Pressable onPress={() => onCreateRecord('income')}>
            <LinearView containerStyle={{paddingHorizontal: 40}}>
              <Text style={{fontWeight: 600, color: COLORS.white}}>Income</Text>
            </LinearView>
          </Pressable>
          <Pressable onPress={() => onCreateRecord('expense')}>
            <LinearView containerStyle={{paddingHorizontal: 40}}>
              <Text style={{fontWeight: 600, color: COLORS.white}}>
                Expense
              </Text>
            </LinearView>
          </Pressable>
        </View>
        <View style={{marginTop: width * 0.12}}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 24,
              fontWeight: 600,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            News
          </Text>
          <Pressable onPress={() => navToDetail(0)}>
            <Image
              source={require('../assets/event1.png')}
              style={{
                width: '100%',
                height: width * 0.33,
                resizeMode: 'contain',
                marginBottom: 16,
              }}
            />
          </Pressable>
          <Pressable onPress={() => navToDetail(1)}>
            <Image
              source={require('../assets/event2.png')}
              style={{
                width: '100%',
                height: width * 0.33,
                resizeMode: 'contain',
              }}
            />
          </Pressable>
        </View>
      </SafeAreaView>
    </ScreenBg>
  );
};

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 50,
  },
  container: {
    paddingTop: 10,
    paddingBottom: 400,
    alignItems: 'center',
  },
  headerImgContainer: {
    width: width,
    height: 230,
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: width * 0.9,
    height: '100%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  price: {
    color: 'gray',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#5C0DAC',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
  },
  columnContainer: {
    justifyContent: 'space-evenly',
  },
  filterText: {
    fontSize: 16,
    lineHeight: 16,
    color: COLORS.white,
    fontWeight: '600',
    margin: 20,
  },

  cartBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  cartBtnText: {
    color: COLORS.white,
    fontWeight: '700',
    marginLeft: 6,
  },
  cartBtnWrapContainer: {
    marginRight: 8,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  cartIcon: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  iconContainer: {
    backgroundColor: COLORS.secondary,
    borderRadius: 65,
    padding: 6,
    marginRight: 6,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  rightItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badgeContainer: {
    position: 'absolute',
    bottom: -2,
    right: -4,
    borderRadius: 60,
    backgroundColor: COLORS.white,
    padding: 1,
    paddingHorizontal: 4,
  },
  badge: {
    color: COLORS.black,
    fontSize: 10,
  },
  emptyTitle: {
    color: COLORS.white,
    fontSize: 17,
  },
  emptyIcon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  emptyContainer: {
    alignItems: 'center',
  },
});

export default observer(ProductListScreen);
