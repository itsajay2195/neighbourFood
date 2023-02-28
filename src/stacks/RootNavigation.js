import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  LoggedInStackNavigator,
  NotLoggedInStackNavigator,
} from './StackContainer';
import React from 'react';
import {Provider} from 'react-redux';
import configStore from '../redux/store';

const Stack = createNativeStackNavigator();
let store = configStore();

function RootNavigation() {
  const isLoggedIn = true; // Replace with your login state check

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {isLoggedIn ? (
            <Stack.Screen
              name="Authorized"
              component={LoggedInStackNavigator}
              options={{headerShown: false}}
            />
          ) : (
            <Stack.Screen
              name="UnAuthorized"
              component={NotLoggedInStackNavigator}
              options={{headerShown: false}}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default RootNavigation;
