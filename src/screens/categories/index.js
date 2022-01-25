import React from 'react';
import styles from './styles'
import {
  Button,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

const Categories = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Categories</Text>
        <Button title="Ir a Productos" onPress={() => navigation.navigate('Products')} color="green"></Button>
      </View>
    </SafeAreaView>
  );
};

export default Categories;
