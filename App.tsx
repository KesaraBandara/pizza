/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppNavigation from './src/navigations/AppNavigation';
import 'react-native-gesture-handler';
// import SignupScreen from './src/screens/SignupScreen.tsx';
// import LoginScreen from './src/screens/LoginScreen.tsx';
function App(): React.JSX.Element {
  return (
    <View style={sty.container}>

      <AppNavigation/>
      {/* <NavigationContainer> </NavigationContainer> */}
      {/* <LoginScreen/> */}
      {/* <SignupScreen/> */}
    </View>
  );
}

const sty = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#yellow',
  },
});

export default App;
