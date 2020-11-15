/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './src/store';
import {NavigationContainer} from '@react-navigation/native';
import  AppNavigation  from './src/config/appNavigator';


const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
           <AppNavigation/>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};


export default App;
