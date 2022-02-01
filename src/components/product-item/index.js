import React from 'react';
import styles from './styles'
import {
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

const ProductItem = ({item, onSelected}) => {

  return (

    
    <TouchableOpacity 
      style={styles.containerTouchable} 
      onPress={() => onSelected(item)}
    >
        
        <View
            style={[styles.container, {backgroundColor: item.color}]}

        >
            
            <View>
                <Text style={styles.name}> {item.name} </Text>
            </View>
            <View>
                <Text style={styles.details}> Precio: $ {item.price} </Text>
                <Text style={styles.details}> Peso: {item.weight} </Text>
            </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;