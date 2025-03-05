import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AddRecordScreen from '../../screens/AddRecordScreen.tsx';
import ProductListScreen from '../../screens/ProductListScreen.tsx';
import EventDetailsScreen from '../../screens/EventDetailsScreen.tsx';
import ProfileEditScreen from '../../screens/ProfileEditScreen.tsx';
import {observer} from 'mobx-react';
import {useStore} from '../../stores/StoreContext.tsx';

const Stack = createStackNavigator();

const MenuStack = () => {
  const {showEditProfile} = useStore().productStore;
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'black',
        headerShown: false,
      }}>
      {showEditProfile && (
        <Stack.Screen name="Profile" component={ProfileEditScreen} />
      )}
      <Stack.Screen name="Home" component={ProductListScreen} />
      <Stack.Screen name="CreateRecord" component={AddRecordScreen} />
      <Stack.Screen name="NewsDetail" component={EventDetailsScreen} />
    </Stack.Navigator>
  );
};

export default observer(MenuStack);
