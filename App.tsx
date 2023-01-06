import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AgendaScreens from './src/screens/AgendaScreens';
import HomeScreen from './src/screens/HomeScreen';
import AddScreen from './src/screens/AddScreen';
import SearchEngine from './src/screens/SearchEngine';
import Splash from './src/screens/Splash';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PredictionScreen from './src/screens/PredictionScreen';

export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const MyStack = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          // headerShown: false,
          headerStyle: {
            backgroundColor: '#00ADF5',
          },
          tabBarHideOnKeyboard: true,
          headerTintColor: '#fff',
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Agenda') {
              iconName = focused ? 'calendar' : 'calendar';
            } else if (route.name === 'Add') {
              iconName = focused ? 'plus' : 'plus';
            } else if (route.name === 'SearchEngine') {
              iconName = focused ? 'search' : 'search';
            } else if (route.name === 'Prediction') {
              iconName = focused ? 'form' : 'areachart';
            }

            // You can return any component that you like here!
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#00ADF5',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Agenda" component={AgendaScreens} />
        <Tab.Screen name="Add" component={AddScreen} />
        <Tab.Screen name="SearchEngine" component={SearchEngine} />
        <Tab.Screen name="Prediction" component={PredictionScreen} />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Acceuil" component={Splash} />
        <Stack.Screen name="MyStack" component={MyStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
