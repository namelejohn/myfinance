import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, View} from 'react-native';
import MenuStack from './stacks/MenuStack.tsx';
import HistoryScreen from '../screens/HistoryScreen.tsx';
import ProfileEditScreen from '../screens/ProfileEditScreen.tsx';
import {createStackNavigator} from '@react-navigation/stack';
import {observer} from 'mobx-react';
import {useStore} from '../stores/StoreContext.tsx';

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5201E4',
        tabBarInactiveTintColor: '#5201E4',
        tabBarStyle: {
          height: 65,
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          position: 'absolute',
          left: 50,
          right: 50,
          elevation: 0,
          shadowColor: 'transparent',
        },
        tabBarLabelStyle: {
          display: 'none',
        },
      }}>
      <Tab.Screen
        name="MenuTab"
        component={MenuStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                backgroundColor: focused ? '#5201E4' : 'rgba(82, 1, 228, 0.2)',
                padding: 10,
                paddingHorizontal: 40,
                borderRadius: 24,
              }}>
              <Image
                source={require('../assets/tabs/pizza.png')}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: '#FFFFFF',
                  resizeMode: 'contain',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileEditScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                backgroundColor: focused ? '#5201E4' : 'rgba(82, 1, 228, 0.2)',
                padding: 10,
                paddingHorizontal: 40,
                borderRadius: 24,
              }}>
              <Image
                source={require('../assets/tabs/reserve.png')}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: '#FFFFFF',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="HistoryTab"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                backgroundColor: focused ? '#5201E4' : 'rgba(82, 1, 228, 0.2)',
                padding: 10,
                paddingHorizontal: 40,
                borderRadius: 24,
              }}>
              <Image
                source={require('../assets/tabs/contact.png')}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: '#FFFFFF',
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const AppNavigator = observer(() => {
  const {showEditProfile} = useStore().productStore;
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={showEditProfile ? 'Profile' : 'MainTab'}>
        <RootStack.Screen name="Profile" component={ProfileEditScreen} />
        <RootStack.Screen name="MainTab" component={TabNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
});

const styles = StyleSheet.create({
  centralButton: {
    position: 'absolute',
    top: -30,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default AppNavigator;
