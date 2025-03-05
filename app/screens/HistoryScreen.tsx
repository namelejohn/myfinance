import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {observer} from 'mobx-react';
import COLORS from '../styles/colors.ts';
import ScreenBg from '../components/ScreenBg.tsx';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyHeader from '../components/MyHeader.tsx';
import {useStore} from '../stores/StoreContext.tsx';
import {Record} from '../types';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {RectButton} from 'react-native-gesture-handler';

interface HistoryScreenProps {
  navigation: any;
  route: any;
}

const HistoryScreen: React.FC<HistoryScreenProps> = props => {
  const {history, deleteRecord} = useStore().productStore;
  const swipeableRefs = new Map();

  const handleDelete = (index: number) => {
    deleteRecord(index);
    swipeableRefs.get(index)?.close();
  };

  const renderRightActions = (index: number) => {
    return (
      <RectButton
        style={{
          backgroundColor: '#A20E0E',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 12,
          marginBottom: 16,
          width: 80,
        }}
        onPress={() => handleDelete(index)}>
        <Text style={{color: COLORS.white, fontSize: 10}}>Remove</Text>
      </RectButton>
    );
  };

  const renderItem = ({item, index}: {item: Record; index: number}) => {
    return (
      <Swipeable
        ref={ref => ref && swipeableRefs.set(index, ref)}
        renderRightActions={() => renderRightActions(index)}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: item.type === 'income' ? '#03AB69' : '#A20E0E',
            borderRadius: 12,
            padding: 14,
            marginHorizontal: 12,
            marginBottom: 16,
          }}>
          <Text style={{color: COLORS.white, fontSize: 16, fontWeight: 500}}>
            {item.title}
          </Text>
          <Text style={{color: COLORS.white, fontSize: 16, fontWeight: 600}}>
            ${item.amount}
          </Text>
        </View>
      </Swipeable>
    );
  };
  return (
    <ScreenBg>
      <SafeAreaView edges={['top']} style={styles.mainContainer}>
        <MyHeader title={'History'} />
        <FlatList
          data={history}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{paddingTop: 20, paddingBottom: 100}}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </ScreenBg>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 50,
  },
  backBtn: {
    paddingTop: 60,
    paddingLeft: 20,
  },
  titleBg: {
    paddingVertical: 5,
    marginVertical: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 500,
    color: COLORS.white,
  },
  desc: {
    color: COLORS.white,
  },
  date: {
    color: COLORS.white,
    marginLeft: 4,
  },
});

export default observer(HistoryScreen);
