import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/AuthScreens/Login/LoginScreen';
import RegistrationScren from '../screens/AuthScreens/RegistrationScren';
import SignUpScreen from '../screens/AuthScreens/SignUpScreen';
import HomeScreen from '../screens/LoggedInScreens/Home/HomeScreen';
import ProfileScreen from '../screens/LoggedInScreens/Profile/ProfileScreen';
import ItemDetails from '../screens/LoggedInScreens/ItemDetails/ItemDetailsScreen';
import React from 'react';
import SplashScreen from '../screens/LoggedInScreens/SplashScreen/SplashScreen';
import {
  AUTH_SCREEN_NAME,
  LOGGED_IN_SCREEN_NAME,
} from '../constants/ScreenConstants';
import UserDayMenu from '../screens/LoggedInScreens/UserDayMenu/UserDayMenu';

const LoggedInStack = createNativeStackNavigator();

export function LoggedInStackNavigator() {
  return (
    <LoggedInStack.Navigator>
      <LoggedInStack.Screen
        name={LOGGED_IN_SCREEN_NAME.splash}
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <LoggedInStack.Screen
        name={LOGGED_IN_SCREEN_NAME.home}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <LoggedInStack.Screen
        name={LOGGED_IN_SCREEN_NAME.profile}
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <LoggedInStack.Screen
        name={LOGGED_IN_SCREEN_NAME.itemDetails}
        component={ItemDetails}
        options={{headerShown: false}}
      />
      <LoggedInStack.Screen
        name={LOGGED_IN_SCREEN_NAME.userDayMenu}
        component={UserDayMenu}
        options={{headerShown: false}}
      />
    </LoggedInStack.Navigator>
  );
}

const NotLoggedInStack = createNativeStackNavigator();

export function NotLoggedInStackNavigator() {
  return (
    <NotLoggedInStack.Navigator>
      {/* <NotLoggedInStack.Screen name={AUTH_SCREEN_NAME.splash} component={SplashScreen}   options={{headerShown: false}}/> */}
      <NotLoggedInStack.Screen
        name={AUTH_SCREEN_NAME.loginIn}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <NotLoggedInStack.Screen
        name={AUTH_SCREEN_NAME.register}
        component={RegistrationScren}
        options={{headerShown: false}}
      />
      <NotLoggedInStack.Screen
        name={AUTH_SCREEN_NAME.signUp}
        component={SignUpScreen}
        options={{headerShown: false}}
      />
    </NotLoggedInStack.Navigator>
  );
}

// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Close drawer"
//         onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
//       />
//       <DrawerItem
//         label="Toggle drawer"
//         onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
//       />
//     </DrawerContentScrollView>
//   );
// }
// const Drawer = createDrawerNavigator();

// export function DrawerContainer() {
//   return (
//     <Drawer.Navigator
//       useLegacyImplementation
//       drawerContent={props => <CustomDrawerContent {...props} />}
//      >
//       <Drawer.Screen
//         name={LOGGED_IN_SCREEN_NAME.home}
//         component={HomeScreen}
//         options={{headerShown: false}}
//       />

//     </Drawer.Navigator>
//   );
// }
