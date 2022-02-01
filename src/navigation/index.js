import React from 'react';
import { View, Text, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from '../screens/categories/index';
import Products from '../screens/products/index';
import ProductDetail from '../screens/product-detail/index';
import { COLORS } from '../utils/data/constants/colors';


const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Categories'
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? COLORS.primary : '',
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
          headerTitleStyle: {
            fontweight: 'bold', 
          },
        }}
      >
        <Stack.Screen name="Categories" component={Categories} />  
        <Stack.Screen 
            name="Products" 
            component={Products} 
            options={({ route }) => ({
              title: route.params.name,
              headerStyle: {
                backgroundColor: route.params.color,
              },
            })}
        />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;