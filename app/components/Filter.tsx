import React from 'react';
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import COLORS from '../styles/colors.ts';

interface FilterProps {
  activeFilter: any;
  onSelect: (filter: any) => void;
  filters: any[];
}

const Filter = ({activeFilter, onSelect, filters}: FilterProps) => {
  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      {filters.map((filter, index) => (
        <View key={index} style={styles.filterContainer}>
          <Pressable
            onPress={() => onSelect(filter)}
            style={[
              styles.filterButton,
              activeFilter?.name === filter.name && styles.activeFilterButton,
            ]}>
            <Text
              style={[
                styles.filterText,
                activeFilter?.name === filter.name && styles.activeFilterText,
              ]}>
              {filter.name}
            </Text>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
};

const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  gradientBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterContainer: {
    marginRight: 10,
    height: width * 0.15,
  },
  filterButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondary,
  },
  activeFilterButton: {
    backgroundColor: COLORS.primary,
  },
  activeFilter: {
    backgroundColor: COLORS.primary,
  },
  filterText: {
    color: COLORS.white,
    fontSize: 15,
  },
  activeFilterText: {
    color: COLORS.white,
  },
});

export default Filter;
