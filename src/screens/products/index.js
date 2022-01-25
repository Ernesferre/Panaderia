import React from 'react';
import { StyleSheet } from 'react-native';
import styles from './styles'

import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';

const Products = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Products</Text>
      </View>
    </SafeAreaView>
  );
};

export default Products;
