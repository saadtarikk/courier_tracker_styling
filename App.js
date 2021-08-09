import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Report from './screens/Report';
import Settings from './screens/Settings';
const Stack = createStackNavigator();
import Tabs from "./navigation/tabs";
import Home from './screens/Home';
import {COLORS} from './constants'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';

import { LinearGradient } from 'expo-linear-gradient';
import Detail from "./screens/Detail";

const getFonts = () => {
  return Font.loadAsync({
  Roboto: require('./assets/fonts/Roboto-Black.ttf'),
  RobotoSemiBold: require('./assets/fonts/Roboto-Medium.ttf'),
  RobotoBold: require('./assets/fonts/Roboto-Bold.ttf')
  });
}  
const App = () => {
  const [fontsloaded, setFontsLoaded] = useState(false);

    
  if (fontsloaded) {
    return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: null,
        }}
        initialRouteName={'Home'}
      >
        <Stack.Screen
          name="Tabs"
          component={Tabs}
        />
        <Stack.Screen
          name="Report"
          component={Report}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
        /><Stack.Screen
          name="Detail"
          component={Detail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
  else{
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => {
          setFontsLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto'
  },
});

export default App;