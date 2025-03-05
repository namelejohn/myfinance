import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface SelectableItemProps {
  label: string;
  selected: boolean;
  onPress: () => void;
}

const SelectableItem: React.FC<SelectableItemProps> = ({
  label,
  selected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, selected && styles.selectedContainer]}
      onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
      <View
        style={[
          styles.circle,
          selected ? styles.checkedCircle : styles.uncheckedCircle,
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(82, 1, 228, 0.25)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 24,
    marginBottom: 10,
  },
  selectedContainer: {
    backgroundColor: 'rgba(82, 1, 228, 0.5)',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  checkedCircle: {
    backgroundColor: 'rgba(82, 1, 228, 1)',
  },
  uncheckedCircle: {
    backgroundColor: 'rgba(217, 217, 217, 0.5)',
  },
});

export default SelectableItem;
