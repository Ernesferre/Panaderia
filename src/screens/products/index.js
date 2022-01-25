import React from 'react';
import { Button, StyleSheet } from 'react-native';
import styles from './styles'

import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';

const Products = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Products</Text>
        <Button title="Ver Detalles de Producto" onPress={() => navigation.navigate('ProductDetail')} color="red"></Button>
      </View>
    </SafeAreaView>
  );
};

export default Products;
