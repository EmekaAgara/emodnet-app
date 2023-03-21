
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import WebView from 'react-native-webview';
import * as React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from './screens/SplashScreen';


export default function App() {
  const Stack = createStackNavigator();
  return (
    
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>

        <Stack.Screen
            name='SplashScreen'
            component={SplashScreen}
            options={{
            headerShown:false,
            }}
          />

        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}