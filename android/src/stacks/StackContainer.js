import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import RegistrationScren from '../screens/AuthScreens/RegistrationScren';
import SignUpScreen from '../screens/AuthScreens/SignUpScreen';
import HomeScreen from '../screens/LoggedInScreens/HomeScreen';
import ProfileScreen from '../screens/LoggedInScreens/ProfileScreen';
import React from 'react'


const LoggedInStack = createNativeStackNavigator();

export function LoggedInStackNavigator() {
  return (
    <LoggedInStack.Navigator>
      <LoggedInStack.Screen name="Home" component={HomeScreen}  options={{headerShown: false}} />
      <LoggedInStack.Screen name="Profile" component={ProfileScreen}   options={{headerShown: false}}/>
    </LoggedInStack.Navigator>
  );
}

const NotLoggedInStack = createNativeStackNavigator();

export function NotLoggedInStackNavigator() {
  return (
    <NotLoggedInStack.Navigator>
      <NotLoggedInStack.Screen name="Login" component={LoginScreen}  options={{headerShown: false}} />
      <NotLoggedInStack.Screen name="Register" component={RegistrationScren}  options={{headerShown: false}} />
      <NotLoggedInStack.Screen name="SignUp" component={SignUpScreen}   options={{headerShown: false}}/>
    </NotLoggedInStack.Navigator>
  );
}
