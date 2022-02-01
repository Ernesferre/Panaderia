import React from 'react';
import styles from './styles'
import {
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

const CategoryItem = ({item, onSelected}) => {

  return (
    <View style={styles.container}>
        
        <TouchableOpacity 
            style={[styles.containerTouchable, {backgroundColor: item.color}]}
            onPress={() => onSelected(item)}
        >
            <View>
                <Text style={styles.title}> {item.title} </Text>
            </View>
        
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;