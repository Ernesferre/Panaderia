/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet } from 'react-native';

import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import AppNavigation from './src/navigation/index';
import { Provider } from 'react-redux';
import store from './src/store/index';


const App = () => {

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};


export default App;
