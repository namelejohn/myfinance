import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {observer} from 'mobx-react';
import COLORS from '../styles/colors.ts';
import ScreenBg from '../components/ScreenBg.tsx';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyHeader from '../components/MyHeader.tsx';
import CustomInput from '../components/CustomInput.tsx';
import {categories, categories_expense} from '../data/data.ts';
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

  const catagories_data = type === 'income' ? categories : categories_expense;

  useEffect(() => {
    props.navigation.setOptions({});
  }, []);

  function handleCreate() {
    createRecord(type);
    props.navigation.popToTop();
  }

  return (
    <ScreenBg>
      <SafeAreaView edges={['left', 'right']} style={styles.mainContainer}>
        <MyHeader showBack title={type} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}>
          <View style={styles.contentContainer}>
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
              containerStyle={styles.amountInput}
              keyboardType={'number-pad'}
            />
            <Text style={styles.categoryTitle}>Category</Text>
            {catagories_data.map(item => (
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
            containerStyle={styles.goButton}
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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  amountInput: {
    marginBottom: 10,
  },
  categoryTitle: {
    color: COLORS.placeholder,
    fontSize: 15,
    marginBottom: 10,
  },
  goButton: {
    marginTop: 40,
  },
});

export default observer(AddRecordScreen);
