import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {observer} from 'mobx-react';
import COLORS from '../styles/colors.ts';
import ScreenBg from '../components/ScreenBg.tsx';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyHeader from '../components/MyHeader.tsx';
import {eventData} from '../data/data.ts';

interface MenuScreenProps {
  navigation: any;
  route: any;
}

const EventDetailsScreen: React.FC<MenuScreenProps> = props => {
  const {params} = props.route;
  const id: number = params?.id;

  return (
    <ScreenBg>
      <SafeAreaView edges={['top']} style={styles.mainContainer}>
        <MyHeader showBack title={'Tips'} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}>
          <View style={styles.contentContainer}>
            <Image source={eventData[id].image} style={styles.eventImage} />
            <View style={styles.titleBg}>
              <Text style={styles.title}>{eventData[id].title}</Text>
            </View>
            <Text style={styles.desc}>{eventData[id].desc}</Text>
          </View>
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
    fontSize: 24,
    fontWeight: 700,
    color: '#9F6EF8',
    textAlign: 'center',
  },
  desc: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 700,
    textAlign: 'center',
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
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  eventImage: {
    width: '95%',
    height: 210,
    resizeMode: 'contain',
    borderRadius: 16,
  },
});

export default observer(EventDetailsScreen);
