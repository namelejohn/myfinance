import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {observer} from 'mobx-react';
import COLORS from '../styles/colors.ts';
import ScreenBg from '../components/ScreenBg.tsx';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyHeader from '../components/MyHeader.tsx';
import CustomInput from '../components/CustomInput.tsx';
import {categories} from '../data/data.ts';
import SelectableItem from '../components/SelectableItem.tsx';
import {useStore} from '../stores/StoreContext.tsx';
import MyButton from '../components/MyButton.tsx';

interface MenuScreenProps {
  navigation: any;
  route: any;
}

const AddRecordScreen: React.FC<MenuScreenProps> = props => {
  const {params} = props.route;
  const {type} = params;
  const {
    selectedCategory,
    setSelectedCategory,
    setAmount,
    setRecordTitle,
    amount,
    recordTitle,
    createRecord,
  } = useStore().productStore;

  useEffect(() => {
    props.navigation.setOptions({});
  }, []);

  function handleCreate() {
    createRecord(type);
    props.navigation.popToTop();
  }

  return (
    <ScreenBg>
      <SafeAreaView edges={['top']} style={styles.mainContainer}>
        <MyHeader showBack title={type} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={{paddingBottom: 100}}>
          <View style={{paddingHorizontal: 16}}>
            <CustomInput
              value={recordTitle}
              onChangeText={setRecordTitle}
              label={'Add a task'}
              placeholder={'...'}
            />
            <CustomInput
              value={amount}
              onChangeText={setAmount}
              label={`${type} amount`}
              placeholder={'...'}
              containerStyle={{marginBottom: 10}}
              keyboardType={'number-pad'}
            />
            <Text
              style={{
                color: COLORS.placeholder,
                fontSize: 15,
                marginBottom: 10,
              }}>
              Category
            </Text>
            {categories.map(item => (
              <SelectableItem
                key={item.id}
                label={item.name}
                selected={selectedCategory === item.name}
                onPress={() => setSelectedCategory(item.name)}
              />
            ))}
          </View>
          <MyButton
            title={'Go'}
            onPress={handleCreate}
            containerStyle={{marginTop: 40}}
          />
        </ScrollView>
      </SafeAreaView>
    </ScreenBg>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
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

export default observer(AddRecordScreen);
