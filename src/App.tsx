/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import {StatusBar} from 'react-native';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './screens/Home';
import JudeHome from './screens/JudeHome';
import KenHome from './screens/KenHome';
import MatthewHome from './screens/MatthewHome';
import VeronicaHome from './screens/VeronicaHome';

type RootStackParamList = {
  Home: undefined;
  JudeHome: undefined;
  KenHome: undefined;
  MatthewHome: undefined;
  VeronicaHome: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar barStyle={'light-content'} />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="JudeHome" component={JudeHome} />
        <Stack.Screen name="KenHome" component={KenHome} />
        <Stack.Screen name="MatthewHome" component={MatthewHome} />
        <Stack.Screen name="VeronicaHome" component={VeronicaHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
