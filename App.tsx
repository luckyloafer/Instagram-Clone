/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import ProfilePage from './components/ProfilePage';
import LoginScreen from './components/LoginScreen';
import Footer from './components/Footer';


import styles from './styles/App.scss'

// in App.js
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons/faSquareCheck'


library.add(fab, faSquareCheck)

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createNativeStackNavigator();

const App = () => {

  return (

  

<NavigationContainer>

<Stack.Navigator>

  <Stack.Screen
    name='LoginScreen'
    options={{ headerShown: false }}
    component={LoginScreen}
  />
  
  <Stack.Screen
    name='Home'
    options={{ headerShown: false }}
    component={Home}
  />

  <Stack.Screen
    name='ProfilePage'
    options={{ headerShown: false }}
    component={ProfilePage}
  />

</Stack.Navigator>



</NavigationContainer>




    

  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
