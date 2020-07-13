/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';



import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import SignupScreen from './src/screens/SignupSceen';
import SigninScreen from './src/screens/SigninScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import AccountsScreen from './src/screens/AccountScreen';
import TracklistScreen from './src/screens/Tracklistscreen';
import TrackDetailsScreen from './src/screens/TrackDetailsScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TracklistScreen,
      TrackDetail: TrackDetailsScreen
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountsScreen
  })
});


const styles = StyleSheet.create({

});

const App =  createAppContainer(switchNavigator);

export default () =>{
  return(
      <AuthProvider>
        <App/>
      </AuthProvider>
  )
}
