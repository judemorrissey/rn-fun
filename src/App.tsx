/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import type {RootStackParams} from 'screens/types';

import * as React from 'react';
import {StatusBar} from 'react-native';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from 'screens/Home';
import JudeHome from 'screens/JudeHome';
import KenHome from 'screens/KenHome';
import MatthewHome from 'screens/MatthewHome';
import SemaHome from 'screens/SemaHome';
import VeronicaHome from 'screens/VeronicaHome';
import BlaireHome from 'screens/BlaireHome';

const Stack = createNativeStackNavigator<RootStackParams>();

const App = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar barStyle={'light-content'} />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={JudeHome} name="JudeHome" />
        <Stack.Screen component={KenHome} name="KenHome" />
        <Stack.Screen component={MatthewHome} name="MatthewHome" />
        <Stack.Screen component={SemaHome} name="SemaHome" />
        <Stack.Screen component={VeronicaHome} name="VeronicaHome" />
        <Stack.Screen component={BlaireHome} name="BlaireHome" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
