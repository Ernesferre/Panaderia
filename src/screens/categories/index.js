import React from 'react';
import styles from './styles';
import {
  Button,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CategoryItem from '../../components/categories-item/index';
import { CATEGORIES } from '../../utils/data/categories';

const Categories = ({navigation}) => {

  const handleSelectedCategory = (item) => {
    navigation.navigate('Products', 
    {
      categoryId: item.id, 
      name: item.title,
      color: item.color
    });
  }

  // console.warn(CATEGORIES);

  const renderCategories = ({item}) => { 
    return (
      <CategoryItem item={item} onSelected={handleSelectedCategory} />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={CATEGORIES}
          renderItem={renderCategories}
          keyExtractor={(item) => item.id}
          
        />

      </View>
    </SafeAreaView>
  );
};

export default Categories;
