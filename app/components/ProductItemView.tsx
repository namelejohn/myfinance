import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Product} from '../types';
import COLORS from '../styles/colors.ts';
import {observer} from 'mobx-react';
import {formatDate} from '../utils/format.ts';

const {width} = Dimensions.get('window');

const ProductItemView = ({item}: {item: Product}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.headerContainer}>
        <Text style={styles.name}>
          {item.pointA} → {item.pointB}
        </Text>
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryTitle}>{item.category}</Text>
        </View>
        <Text style={styles.dateText}>{formatDate(item.dateArrival)}</Text>
        <Text style={styles.price}>${item.cost}</Text>
      </View>

      <TouchableOpacity
        style={styles.accordionHeader}
        onPress={() => setExpanded(!expanded)}>
        <Text style={styles.accordionHeaderText}>Additional information</Text>
        <Text style={styles.arrow}>{expanded ? '▲' : '▼'}</Text>
      </TouchableOpacity>

      {expanded && (
        <View style={styles.accordionContent}>
          <View style={styles.row}>
            <Text style={styles.subtitle}>On the way</Text>
            <Text style={styles.info}>{item.duration}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.subtitle}>Passengers</Text>
            <Text style={styles.info}>{item.passengers}</Text>
          </View>

          <Text style={styles.subtitle}>Comment</Text>
          <Text style={styles.comment}>{item.comment}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.9,
    borderRadius: 12,
    marginBottom: 10,
    backgroundColor: COLORS.white,
    padding: 12,
  },
  headerContainer: {
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.black,
    marginBottom: 4,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.primary,
    borderRadius: 24,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginBottom: 6,
  },
  categoryTitle: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 14,
  },
  dateText: {
    color: '#4B5563',
    fontWeight: '500',
    marginBottom: 6,
  },
  price: {
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.secondary,
    marginBottom: 4,
  },
  accordionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  accordionHeaderText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#4B5563',
  },
  arrow: {
    fontSize: 16,
    color: COLORS.grayText,
    fontWeight: '600',
  },
  accordionContent: {
    marginTop: 8,
  },
  subtitle: {
    fontWeight: 700,
    color: '#4B5563',
  },
  info: {
    fontWeight: 500,
    color: '#4B5563',
  },
  comment: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: '400',
    color: '#4B5563',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
});

export default observer(ProductItemView);
