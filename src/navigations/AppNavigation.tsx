/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomPage from '../screens/HomPage';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} options={
          {
              cardStyleInterpolator:CardStyleInterpolators.forVerticalIOS
           }
      } />
      <Stack.Screen name="HomPage" component={HomPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
